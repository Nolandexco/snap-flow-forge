import { useEffect } from "react";

const MIDTRANS_SCRIPT_URL = "https://app.sandbox.midtrans.com/snap/snap.js";
const MIDTRANS_CLIENT_KEY = "SB-Mid-client-2Jja2G7bzxSbRvmC";

export const useMidtransScript = () => {
  useEffect(() => {
    // Check if script already exists
    if (document.querySelector(`script[src="${MIDTRANS_SCRIPT_URL}"]`)) {
      return;
    }

    const script = document.createElement("script");
    script.src = MIDTRANS_SCRIPT_URL;
    script.setAttribute("data-client-key", MIDTRANS_CLIENT_KEY);
    script.async = true;
    
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src="${MIDTRANS_SCRIPT_URL}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);
};
