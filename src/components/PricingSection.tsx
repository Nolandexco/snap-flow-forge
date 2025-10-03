import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PatternBackground } from "./PatternBackground";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

const products: Product[] = [
  {
    id: "basic-plan",
    name: "Basic Plan",
    price: 199000,
    features: [
      "Smart Automation Basic",
      "Basic Analytics",
      "Team Collaboration (max 5 users)",
      "Standard Security",
      "Email Support",
    ]
  },
  {
    id: "pro-plan",
    name: "Pro Plan",
    price: 499000,
    features: [
      "Smart Automation Pro",
      "Advanced Analytics",
      "Team Collaboration (max 20 users)",
      "Enhanced Security",
      "Priority Support",
      "API Access",
      "Custom Integration",
    ],
    popular: true
  },
  {
    id: "enterprise-plan",
    name: "Enterprise Plan",
    price: 999000,
    features: [
      "Smart Automation Enterprise",
      "Advanced Analytics + AI Insights",
      "Unlimited Team Collaboration",
      "Enterprise Security",
      "24/7 Dedicated Support",
      "Full API Access",
      "Custom Integration",
      "Onboarding Session",
      "Custom Reporting",
    ]
  }
];

export const PricingSection = () => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const checkout = async (product: Product) => {
    if (isProcessing) return;
    
    setIsProcessing(true);
    const data = { 
      id: `${product.id}-${Date.now()}`,
      productName: product.name, 
      price: product.price, 
      quantity: 1 
    };
    
    try {
      const { data: tokenData, error } = await supabase.functions.invoke('midtrans-tokenizer', {
        body: data,
      });
      
      if (error) throw error;
      
      if (!tokenData?.token) throw new Error("Invalid token response");
      
      // Load Midtrans Snap
      (window as any).snap.pay(tokenData.token);
      
    } catch (err: any) {
      console.error("Checkout error:", err.message);
      toast({
        title: "Error",
        description: "Terjadi error saat proses checkout. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <PatternBackground className="w-full py-20 md:py-32" id="pricing-section">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4">
          Pilih Paket yang Tepat untuk Bisnis Anda
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Mulai dari kebutuhan dasar hingga solusi enterprise yang lengkap
        </p>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className={`shadow-xl rounded-3xl p-6 relative transition-all hover:scale-105 h-full flex flex-col ${
                product.popular ? 'ring-2 ring-primary transform scale-105' : ''
              }`}
            >
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    PALING POPULAR
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <div className="mt-4">
                  <p className="text-4xl font-extrabold text-primary">
                    {formatPrice(product.price)}
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">/bulan</p>
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-4 flex-col">
                <Button
                  className={`w-full py-6 rounded-xl font-semibold transition-all shadow-lg ${
                    product.popular ? '' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                  onClick={() => checkout(product)}
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : `Pilih ${product.name}`}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Tidak ada biaya tersembunyi
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 space-y-2">
          <p className="text-muted-foreground">
            ❯ Semua paket termasuk update gratis dan support 24/7
          </p>
          <p className="text-muted-foreground">
            ❯ Garansi uang kembali 30 hari jika tidak puas
          </p>
        </div>
      </div>
    </PatternBackground>
  );
};
