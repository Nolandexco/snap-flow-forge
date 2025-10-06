import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Smart Automation",
    description: "Otomatisasi tugas berulang agar lebih efisien.",
    image: "https://images.unsplash.com/photo-1589224535384-033b9cfa6c88?q=80&w=800",
  },
  {
    title: "Advanced Analytics",
    description: "Insight dengan visualisasi data real-time.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
  },
  {
    title: "Team Collaboration",
    description: "Kolaborasi tim lebih mudah dan produktif.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
          Everything You Need
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Card key={i} className="h-full hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
