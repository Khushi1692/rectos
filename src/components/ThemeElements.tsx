import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * ThemeElements - Consistent visual theme across all Recto's Pizza pages
 * 
 * THEME: "Premium Subtle"
 * - Soft grain texture
 * - Dynamic brand-colored glows
 * - Clean geometric accents
 */

interface ThemeElementsProps {
  variant?: "light" | "dark";
}

export const ThemeElements = ({ variant = "light" }: ThemeElementsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!glowsRef.current) return;

    const glows = glowsRef.current.children;
    
    Array.from(glows).forEach((glow) => {
      gsap.to(glow, {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  const isDark = variant === "dark";

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Base removed to prevent masking footer */}

      {/* Soft Grain Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Dynamic Brand Glows */}
      <div ref={glowsRef} className="absolute inset-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/30 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/20 blur-[150px] rounded-full" />
        <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full" />
      </div>

      {/* Subtle Grid Accent */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(${isDark ? "#fff" : "#000"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "#fff" : "#000"} 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Premium Corner Details - More subtle */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
};

export const PageTransition = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, y: 30, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <div ref={containerRef} className={`relative z-10 ${className}`}>
      {children}
    </div>
  );
};

