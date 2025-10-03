// Deno edge function for Midtrans payment gateway

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface TransactionRequest {
  id: string;
  productName: string;
  price: number;
  quantity: number;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { id, productName, price, quantity }: TransactionRequest = await req.json();

    const serverKey = Deno.env.get('MIDTRANS_SERVER_KEY');
    if (!serverKey) {
      throw new Error('MIDTRANS_SERVER_KEY is not set');
    }

    const parameter = {
      item_details: [{
        name: productName,
        price: price,
        quantity: quantity,
      }],
      transaction_details: {
        order_id: id,
        gross_amount: price * quantity,
      },
      customer_details: {
        first_name: "Customer",
        email: "customer@example.com",
        phone: "08123456789",
      },
    };

    // Call Midtrans Snap API
    const authHeader = `Basic ${btoa(serverKey + ':')}`;
    const response = await fetch('https://app.sandbox.midtrans.com/snap/v1/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': authHeader,
      },
      body: JSON.stringify(parameter),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Midtrans API error:', errorData);
      throw new Error(`Midtrans API returned ${response.status}`);
    }

    const data = await response.json();

    return new Response(
      JSON.stringify({ token: data.token }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error processing the request:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
