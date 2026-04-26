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
  const hasSpokenRef = useRef(false);

  // Robust voice loading
  useEffect(() => {
    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length > 0) setVoices(v);
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  // Extremely direct speak function
  const speakDirect = (text: string, force = false) => {
    if (!('speechSynthesis' in window)) return;
    
    // On some browsers, we must resume before speaking
    window.speechSynthesis.resume();
    
    if (force) {
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 1.0; // Explicitly set full volume
    
    // Try to find a good voice
    const availableVoices = voices.length > 0 ? voices : window.speechSynthesis.getVoices();
    const voice = 
      availableVoices.find(v => v.name.toLowerCase().includes("natural") && v.lang.startsWith("en")) ||
      availableVoices.find(v => v.name.toLowerCase().includes("google") && v.lang.startsWith("en")) ||
      availableVoices.find(v => v.lang.startsWith("en")) ||
      availableVoices[0];
    
    if (voice) utterance.voice = voice;

    utterance.onstart = () => setIsTalking(true);
    utterance.onend = () => setIsTalking(false);
    utterance.onerror = () => setIsTalking(false);
    
    window.speechSynthesis.speak(utterance);
  };

  const initialSpeechRef = useRef(initialSpeech);
  useEffect(() => {
    initialSpeechRef.current = initialSpeech;
  }, [initialSpeech]);

  // First interaction listener - Isolated to prevent misses
  useEffect(() => {
    if (!visible) return;

    const onFirstInteraction = () => {
      if (hasSpokenRef.current) return;
      
      // Speak the welcome directly
      speakDirect(initialSpeechRef.current || "Welcome to Recto's Pizza!");
      hasSpokenRef.current = true;
      
      // Remove listeners
      ["click", "touchstart", "keydown", "mousedown"].forEach(e => 
        document.removeEventListener(e, onFirstInteraction)
      );
    };

    ["click", "touchstart", "keydown", "mousedown"].forEach(e => 
      document.addEventListener(e, onFirstInteraction, { once: true })
    );

    return () => {
      ["click", "touchstart", "keydown", "mousedown"].forEach(e => 
        document.removeEventListener(e, onFirstInteraction)
      );
    };
  }, [visible]);

  // Footer avoidance (separate effect)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (characterRef.current) {
        characterRef.current.style.opacity = entry.isIntersecting ? "0" : "1";
        characterRef.current.style.transform = entry.isIntersecting ? "scale(0.5)" : "scale(1)";
      }
    }, { threshold: 0.1 });

    const footer = document.getElementById("site-footer");
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // Bubble animation
  useEffect(() => {
    if (initialMessage) setCurrentText(initialMessage);
    if (speechRef.current) {
      gsap.fromTo(speechRef.current, { scale: 0, opacity: 0 }, { 
        scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)",
        onComplete: () => {
          gsap.to(speechRef.current, { scale: 1.05, duration: 1, repeat: -1, yoyo: true, ease: "sine.inOut" });
        }
      });
    }
  }, [initialMessage]);

  // Mascot animations
  useEffect(() => {
    if (!visible || !mascotImgRef.current) return;
    const float = gsap.to(mascotImgRef.current, { y: -10, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });
    
    let talk: gsap.core.Timeline | null = null;
    if (isTalking) {
      talk = gsap.timeline({ repeat: -1 })
        .to(mascotImgRef.current, { scale: 1.03, rotate: -1, duration: 0.1 })
        .to(mascotImgRef.current, { scale: 1, rotate: 1, duration: 0.1 });
    }

    return () => {
      float.kill();
      if (talk) talk.kill();
    };
  }, [visible, isTalking]);

  if (!visible) return null;

  return (
    <div
      ref={characterRef}
      className="fixed z-[50] flex flex-col items-center transition-all duration-500 w-[140px] sm:w-[180px] bottom-2 right-2"
    >
      <div 
        ref={speechRef} 
        className="absolute -top-12 sm:-top-10 right-12 sm:right-10 bg-white text-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl shadow-xl border-2 border-primary/20 text-xs sm:text-sm font-bold z-[51] whitespace-nowrap cursor-pointer max-w-[200px] sm:max-w-none truncate"
        onClick={() => speakDirect(currentText, true)}
      >
        {currentText}
        <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r-2 border-b-2 border-primary/20 rotate-45" />
      </div>

      <div className="relative w-32 h-32 sm:w-40 sm:h-40 cursor-pointer" onClick={() => speakDirect(currentText, true)}>
        <img ref={mascotImgRef} src={charater} alt="Mascot" className="w-full h-full object-contain" />
      </div>
      <div className="w-16 h-2 sm:w-20 sm:h-3 bg-black/20 blur-md rounded-full mt-[-10px]" />
    </div>
  );
};
