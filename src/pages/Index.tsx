import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyRectangle from "@/components/WhyRectangle";
import MenuSection from "@/components/MenuSection";
import HowItWorks from "@/components/HowItWorks";
import BrandSection from "@/components/BrandSection";
import ReviewsSection from "@/components/ReviewsSection";
import FooterSection from "@/components/FooterSection";
import SEO from "@/components/SEO";
import { ThemeElements } from "@/components/ThemeElements";
import { MenuCharacter } from "@/components/MenuCharacter";

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Recto's Pizza",
  description: "Rectangle pizza perfection in Clayton South, Melbourne.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "23 Meriton Pl",
    addressLocality: "Clayton South",
    addressRegion: "VIC",
    postalCode: "3169",
    addressCountry: "AU",
  },
  telephone: "+61406562036",
  servesCuisine: "Pizza",
  url: "https://rectospizza.com",
  openingHours: ["Mo-Th 17:00-22:59", "Fr-Su 17:00-23:59"],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ThemeElements variant="light" />
      <SEO
        title="Recto's Pizza | Best Rectangle Pizza in Clayton South, Melbourne"
        description="Craving the best pizza in Clayton South? Discover Recto's Pizza - the home of perfectly sliced, cheesy rectangle pizzas. Fresh ingredients, bold flavors. Order online now!"
        canonical="https://rectospizza.com"
        jsonLd={homepageJsonLd}
      />
      <Navbar />
      <MenuCharacter 
        visible={true} 
        initialMessage="Hi! Welcome to Recto's Pizza! 🍕" 
        initialSpeech="Hi! Welcome to Recto's Pizza. " 
      />
      <HeroSection />
      <WhyRectangle />
      <MenuSection />
      <HowItWorks />
      <BrandSection />
      <ReviewsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
