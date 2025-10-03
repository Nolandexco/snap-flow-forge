import { Card, CardContent } from "@/components/ui/card";
import { PatternBackground } from "./PatternBackground";

const steps = [
  { title: "Sign Up", description: "Buat akun dan mulai eksplorasi platform." },
  { title: "Integrate", description: "Hubungkan tools dan workflow dengan integrasi mudah." },
  { title: "Succeed", description: "Otomatisasi tugas dan capai tujuan bisnis." },
];

export const HowItWorksSection = () => {
  return (
    <PatternBackground className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
          How It Works
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Card key={i} className="h-full hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PatternBackground>
  );
};
