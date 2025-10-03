import { useState } from "react";
import { PatternBackground } from "./PatternBackground";
import { Minus, Plus } from "lucide-react";

const faqs = [
  { q: "Apa itu layanan ini?", a: "Ini adalah platform untuk membantu bisnis berkembang lebih cepat." },
  { q: "Bagaimana cara berlangganan?", a: "Pilih paket lalu klik \"Pilih Plan\". Pembayaran lewat gateway Midtrans yang aman." },
  { q: "Apakah bisa upgrade paket?", a: "Ya, bisa upgrade kapan saja dengan membayar selisih harga paket." },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <PatternBackground className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
          Pertanyaan Umum
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="rounded-xl bg-card shadow-md border border-border overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-accent/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{item.q}</span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="p-4 pt-0 text-muted-foreground border-t border-border">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PatternBackground>
  );
};
