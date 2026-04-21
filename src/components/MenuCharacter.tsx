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
  const [isTalking, setIsTalking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  // Load voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
      }
    };

    loadVoices();
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Voice synthesis function
  const speakMessage = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    
    // Ensure voices are loaded
    if (voices.length === 0) {
      const v = window.speechSynthesis.getVoices();
      if (v.length > 0) setVoices(v);
    }
    
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Adjust rate and pitch for more human-like feel
    utterance.rate = 0.85; // Slightly slower for clarity and warmth
    utterance.pitch = 1.0; 
    
    if (voices.length > 0) {
      // Prioritize natural sounding English voices
      const preferredVoice = 
        voices.find(v => v.name.toLowerCase().includes("natural") && v.lang.startsWith("en")) ||
        voices.find(v => v.name.toLowerCase().includes("premium") && v.lang.startsWith("en")) ||
        voices.find(v => v.name.toLowerCase().includes("google") && v.name.toLowerCase().includes("female")) ||
        voices.find(v => v.name.toLowerCase().includes("google") && v.lang.startsWith("en")) ||
        voices.find(v => v.name.toLowerCase().includes("female") && v.lang.startsWith("en")) ||
        voices.find(v => v.lang.startsWith("en")) ||
        voices[0];
      
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => setIsTalking(true);
    utterance.onend = () => setIsTalking(false);
    utterance.onerror = () => setIsTalking(false);
    
    window.speechSynthesis.speak(utterance);
  };

  const hasSpokenRef = useRef(false);

  // Welcome speech (once) and message rotation
  useEffect(() => {
    if (!visible) return;

    const triggerSpeech = () => {
      if (hasSpokenRef.current) return;
      
      if (!('speechSynthesis' in window)) return;
      
      window.speechSynthesis.cancel();
      const text = initialSpeech || "Welcome to Recto's Pizza!";
      const utterance = new SpeechSynthesisUtterance(text);
      
      utterance.rate = 0.85;
      utterance.pitch = 1.0;
      
      if (voices.length > 0) {
        const preferredVoice = 
          voices.find(v => v.name.toLowerCase().includes("natural") && v.lang.startsWith("en")) ||
          voices.find(v => v.name.toLowerCase().includes("premium") && v.lang.startsWith("en")) ||
          voices.find(v => v.name.toLowerCase().includes("google") && v.name.toLowerCase().includes("female")) ||
          voices.find(v => v.name.toLowerCase().includes("google") && v.lang.startsWith("en")) ||
          voices.find(v => v.name.toLowerCase().includes("female") && v.lang.startsWith("en")) ||
          voices.find(v => v.lang.startsWith("en")) ||
          voices[0];
        utterance.voice = preferredVoice;
      }

      utterance.onstart = () => {
        setIsTalking(true);
        hasSpokenRef.current = true;
        // Cleanup listeners ONLY when speech successfully starts
        const events = ["click", "touchstart", "scroll", "mousedown", "keydown", "mousemove", "wheel"];
        events.forEach(event => window.removeEventListener(event, triggerSpeech));
      };
      
      utterance.onend = () => setIsTalking(false);
      utterance.onerror = () => {
        setIsTalking(false);
        // If it errored (likely blocked), we DON'T set hasSpokenRef to true
        // so that the next user interaction can try again.
      };
      
      window.speechSynthesis.speak(utterance);
    };

    // Auto-trigger attempt
    const welcomeTimeout = setTimeout(() => triggerSpeech(), 500);

    // Backup interaction listeners
    const events = ["click", "touchstart", "scroll", "mousedown", "keydown", "mousemove", "wheel"];
    events.forEach(event => window.addEventListener(event, triggerSpeech, { once: true }));

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
      const events = ["click", "touchstart", "scroll", "mousedown", "keydown", "mousemove", "wheel"];
      events.forEach(event => window.removeEventListener(event, triggerSpeech));
      window.speechSynthesis.cancel();
    };
  }, [visible, initialSpeech, voices]);

  // Update text and animate bubble in (NO rotation, text stays fixed)
  useEffect(() => {
    if (initialMessage) {
      setCurrentText(initialMessage);
    }
    
    if (speechRef.current) {
      gsap.fromTo(speechRef.current, 
        { scale: 0, opacity: 0 }, 
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.5, 
          ease: "back.out(1.7)",
          onComplete: () => {
            // Subtle pulse to invite click if not yet spoken
            gsap.to(speechRef.current, {
              scale: 1.05,
              duration: 1,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut"
            });
          }
        }
      );
    }
  }, [initialMessage]);

  // Animations: Floating, Breathing, Looking around, and Talking
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

    // 3. Talking animation (pulsing scale and slight rotation)
    let talkTl: gsap.core.Timeline | null = null;
    if (isTalking) {
      talkTl = gsap.timeline({ repeat: -1 });
      talkTl.to(mascotImgRef.current, {
        scale: 1.05,
        rotate: -2,
        duration: 0.1,
        ease: "sine.inOut"
      }).to(mascotImgRef.current, {
        scale: 1,
        rotate: 2,
        duration: 0.1,
        ease: "sine.inOut"
      });
    }

    // 4. Shadow sync
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
      if (talkTl) talkTl.kill();
      gsap.killTweensOf(mascotImgRef.current);
    };
  }, [visible, isTalking]);

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
