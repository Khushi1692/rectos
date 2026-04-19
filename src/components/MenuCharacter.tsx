import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import charater from "@/assets/charater.png";

/**
 * MenuCharacter - Fixed Bottom-Right Mascot
 * 
 * Features:
 * 1. Fixed Position: Stays at the bottom-right corner of the viewport.
 * 2. Rotating Text: Automatically cycles through fun messages every 4 seconds.
 * 3. Smooth Animations: Floating effect and bubble transitions.
 */

const MESSAGES = [
  "Welcome to Recto's Pizza Menu! 🍕",
  "Craving for rectangle pizza? 🍕",
  "Hungry for Rectangles? 🍕",
  "Try our Signature Pizzas!",
  "Cheese lover's dream! 🧀",
  "Perfectly Sliced!",
  "Feeling brave? Try Bhoot Jolokia! 🔥",
  "K-Fusion Magic! 🇰🇷",
  "Garlic Goodness! 🧄",
  "Thirsty? Check our shakes! 🥤",
  "Best Value Combos!",
  "Add some extra toppings! ✨",
  "Recto's Special just for you!",
  "Yum! Delicious choices! 😋"
];

interface MenuCharacterProps {
  visible: boolean;
  initialMessage?: string;
  initialSpeech?: string;
  // containerRef kept for backward compatibility but unused
  containerRef?: React.RefObject<HTMLElement>;
}

export const MenuCharacter = ({ visible, initialMessage, initialSpeech }: MenuCharacterProps) => {
  const characterRef = useRef<HTMLDivElement>(null);
  const mascotImgRef = useRef<HTMLImageElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const speechRef = useRef<HTMLDivElement>(null);
  const [currentText, setCurrentText] = useState(initialMessage || MESSAGES[0]);
  const [msgIndex, setMsgIndex] = useState(0);

  // Voice synthesis function
  const speakMessage = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.1;
    
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      const preferredVoice = voices.find(v => v.name.includes("Google") || v.name.includes("Female")) || voices[0];
      utterance.voice = preferredVoice;
    }
    
    window.speechSynthesis.speak(utterance);
  };

  // Welcome speech (once) and message rotation
  useEffect(() => {
    if (!visible) return;

    let hasSpoken = false;
    
    const triggerSpeech = () => {
      if (hasSpoken) return;
      speakMessage(initialSpeech || "Welcome to Recto's Pizza!");
      hasSpoken = true;
      // Remove listeners once spoken
      window.removeEventListener("click", triggerSpeech);
      window.removeEventListener("touchstart", triggerSpeech);
    };

    // Attempt to speak after 2 seconds
    const welcomeTimeout = setTimeout(() => {
      triggerSpeech();
    }, 2000);

    // Also add interaction listeners to bypass browser autoplay blocks
    window.addEventListener("click", triggerSpeech);
    window.addEventListener("touchstart", triggerSpeech);

    // Footer avoidance logic
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(characterRef.current, { opacity: 0, scale: 0.5, duration: 0.5 });
        } else {
          gsap.to(characterRef.current, { opacity: 1, scale: 1, duration: 0.5 });
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.getElementById("site-footer");
    if (footer) footerObserver.observe(footer);

    return () => {
      clearTimeout(welcomeTimeout);
      footerObserver.disconnect();
      window.removeEventListener("click", triggerSpeech);
      window.removeEventListener("touchstart", triggerSpeech);
      window.speechSynthesis.cancel();
    };
  }, [visible, initialSpeech]);

  // Update text and animate bubble in (NO rotation, text stays fixed)
  useEffect(() => {
    if (initialMessage) {
      setCurrentText(initialMessage);
    }
    
    if (speechRef.current) {
      gsap.fromTo(speechRef.current, 
        { scale: 0, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
  }, [initialMessage]);

  // Animations: Floating, Breathing, Looking around
  useEffect(() => {
    if (!visible || !characterRef.current || !shadowRef.current || !mascotImgRef.current) return;

    // Initial appearance
    gsap.set(characterRef.current, { visibility: "visible", opacity: 1, scale: 0 });
    gsap.to(characterRef.current, { scale: 1, duration: 0.8, ease: "back.out(1.7)" });

    // 1. Floating & Breathing Animation
    const floatTl = gsap.timeline({ repeat: -1, yoyo: true });
    floatTl.to(mascotImgRef.current, { 
      y: "-=12", 
      scaleY: 1.04, // Breathing effect
      scaleX: 0.97,
      rotate: 2, 
      duration: 2, 
      ease: "sine.inOut" 
    });
    
    // 2. Looking around animation
    const lookAround = () => {
      if (!mascotImgRef.current) return;
      gsap.to(mascotImgRef.current, {
        x: gsap.utils.random(-5, 5),
        y: gsap.utils.random(-3, 3),
        duration: 0.6,
        ease: "power1.inOut",
        delay: gsap.utils.random(3, 7),
        onComplete: lookAround
      });
    };
    lookAround();

    // 3. Shadow sync
    gsap.to(shadowRef.current, { 
      opacity: 0.15, 
      scale: 0.9, 
      duration: 2, 
      repeat: -1, 
      yoyo: true, 
      ease: "sine.inOut" 
    });

    return () => {
      floatTl.kill();
      gsap.killTweensOf(mascotImgRef.current);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={characterRef}
      className="fixed z-[50] pointer-events-none flex flex-col items-center"
      style={{ 
        width: "180px", 
        height: "180px", 
        bottom: "0.5rem", 
        right: "0.5rem", 
        visibility: "visible",
        opacity: 0
      }}
    >
      {/* Speech Bubble */}
      <div 
        ref={speechRef} 
        className="absolute -top-10 right-10 bg-white text-foreground px-4 py-2.5 rounded-2xl shadow-xl border-2 border-primary/20 text-sm font-bold z-[51] whitespace-nowrap"
      >
        {currentText}
        {/* Tail */}
        <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r-2 border-b-2 border-primary/20 rotate-45" />
      </div>

      {/* Mascot Image */}
      <div className="relative w-full h-full flex items-center justify-center">
        <img 
          ref={mascotImgRef} 
          src={charater} 
          alt="Mascot" 
          className="w-full h-full object-contain" 
          style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.35))" }} 
        />
      </div>

      {/* Shadow */}
      <div 
        ref={shadowRef} 
        className="absolute bottom-2 w-20 h-3 bg-black/20 blur-md rounded-full" 
      />
    </div>
  );
};
