import { useEffect, useRef } from "react";
import gsap from "gsap";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };

    const onMouseEnter = () => {
      gsap.to([cursor, follower], { scale: 1.5, opacity: 1 });
    };

    const onMouseLeave = () => {
      gsap.to([cursor, follower], { scale: 0, opacity: 0 });
    };

    const onMouseDown = () => {
      gsap.to(follower, { scale: 0.8, backgroundColor: "hsl(var(--primary))" });
    };

    const onMouseUp = () => {
      gsap.to(follower, { scale: 1.5, backgroundColor: "transparent" });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Interactive elements hover
    const links = document.querySelectorAll("a, button, [role='button']");
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(follower, { scale: 3, backgroundColor: "rgba(255, 112, 67, 0.1)", border: "none" });
        gsap.to(cursor, { opacity: 0 });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(follower, { scale: 1.5, backgroundColor: "transparent", border: "2px solid hsl(var(--primary))" });
        gsap.to(cursor, { opacity: 1 });
      });
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
};
