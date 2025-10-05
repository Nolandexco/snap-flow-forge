import { Card } from "@/components/ui/card";

const testimonials = Array.from({ length: 9 }).map((_, i) => ({
  name: `User ${i + 1}`,
  profession: "Entrepreneur",
  image: `https://i.pravatar.cc/150?img=${i + 10}`,
}));

export const TestimonialsSection = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-2 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
          Apa Kata Mereka
        </h2>
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="flex flex-col items-center text-center p-4 md:p-6 hover:shadow-lg transition-shadow"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 md:w-20 md:h-20 rounded-full mb-3 object-cover border-2 border-primary-foreground"
                />
                <h3 className="text-sm md:text-lg font-semibold text-foreground">{t.name}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{t.profession}</p>
              </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
