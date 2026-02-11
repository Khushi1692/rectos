import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyRectangle from "@/components/WhyRectangle";
import MenuSection from "@/components/MenuSection";
import HowItWorks from "@/components/HowItWorks";
import BrandSection from "@/components/BrandSection";
import ReviewsSection from "@/components/ReviewsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
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
