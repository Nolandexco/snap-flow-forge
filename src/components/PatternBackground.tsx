import { ReactNode } from "react";

interface PatternBackgroundProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "light" | "dark";
}

export const PatternBackground = ({ children, className = "", id, variant = "light" }: PatternBackgroundProps) => (
  <section id={id} className={`relative ${variant === "dark" ? "bg-primary text-primary-foreground" : "bg-background"} ${className}`}>
    <div className="relative">
      {/* Dashed Grid Pattern */}
      <div
        className={`absolute inset-0 z-0 ${variant === "dark" ? "opacity-10" : "opacity-30"}`}
        style={{
          backgroundImage: `
            linear-gradient(to right, ${variant === "dark" ? "hsl(var(--primary-foreground))" : "hsl(var(--border))"} 1px, transparent 1px),
            linear-gradient(to bottom, ${variant === "dark" ? "hsl(var(--primary-foreground))" : "hsl(var(--border))"} 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  </section>
);
