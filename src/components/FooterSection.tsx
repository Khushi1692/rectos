import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-secondary-foreground text-center mb-10">
            Find <span className="text-primary">Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="flex items-start gap-3 text-secondary-foreground/90">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-sm text-secondary-foreground/70">23 Meriton Pl, Clayton South VIC 3169</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-secondary-foreground/90">
              <Phone className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-sm text-secondary-foreground/70">+61 406 562 036</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-secondary-foreground/90">
              <Clock className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Hours</p>
                <p className="text-sm text-secondary-foreground/70">Open 11am – 11pm Daily</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8"
              onClick={() => window.open("https://maps.google.com/?q=23+Meriton+Pl+Clayton+South+VIC+3169", "_blank")}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </Button>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/10 mt-12 pt-6 text-center">
          <p className="text-secondary-foreground/50 text-sm">
            © 2026 Recto's Pizza on the Go. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
