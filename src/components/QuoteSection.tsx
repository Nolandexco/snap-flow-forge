import { Card } from "@/components/ui/card";

export const QuoteSection = () => (
  <section className="w-full py-20 md:py-32 bg-primary text-primary-foreground">
    <div className="max-w-2xl mx-auto px-4">
      <Card className="p-8 text-center shadow-xl">
        <img
          src="https://i.pravatar.cc/150?img=50"
          alt="Owner"
          className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-primary-foreground object-cover"
        />
        <blockquote className="text-lg italic text-muted-foreground mb-4">
          "Kami percaya teknologi dapat membantu setiap bisnis tumbuh lebih cepat dan lebih cerdas."
        </blockquote>
        <p className="font-semibold text-foreground">John Doe</p>
        <p className="text-sm text-muted-foreground">Founder & CEO, KODEBISNIS</p>
      </Card>
    </div>
  </section>
);
