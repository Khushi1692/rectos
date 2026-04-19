import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

export const PizzaSliceTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    const tl = gsap.timeline();

    // Wipe IN
    tl.set(overlayRef.current, { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" })
      .to(overlayRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 0.5,
        ease: "power2.inOut",
      })
      // Wipe OUT
      .to(overlayRef.current, {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        duration: 0.5,
        ease: "power2.inOut",
        delay: 0.1
      });

  }, [location.pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-primary z-[10000] pointer-events-none flex items-center justify-center overflow-hidden"
        style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
      >
        <div className="text-primary-foreground font-heading text-6xl font-black italic tracking-tighter select-none">
          RECTO'S
        </div>
      </div>
      {children}
    </>
  );
};
