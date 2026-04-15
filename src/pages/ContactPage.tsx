import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import SEO from "@/components/SEO";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["23 Meriton Pl,", "Clayton South VIC 3169, Australia"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+61 406 562 036"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@rectospizza.com"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: [
      "Monday – Thursday: 5:00 PM – 10:59 PM",
      "Friday – Sunday: 5:00 PM – 11:59 PM",
    ],
  },
];

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Recto's Pizza",
  "mainEntity": {
    "@type": "Restaurant",
    "name": "Recto's Pizza",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "23 Meriton Pl",
      "addressLocality": "Clayton South",
      "addressRegion": "VIC",
      "postalCode": "3169",
      "addressCountry": "AU"
    },
    "telephone": "+61 406 562 036",
    "email": "info@rectospizza.com"
  }
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { toast } = useToast();

  const onSubmit = (data: any) => {
    emailjs
      .send(
        "service_510c7ad",
        "template_ova583j",
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        "rXo5ETZyR00khz4uy",
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description:
              "Thank you for your message. We'll get back to you soon.",
          });
          reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast({
            title: "Failed to Send",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
        },
      );
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us & Find Our Location | Recto's Pizza Clayton South"
        description="Visit Recto's Pizza in Clayton South. Call +61 406 562 036 or email info@rectospizza.com for orders and inquiries. Find our location on the map."
        canonical="https://rectospizza.com/contact"
        jsonLd={contactJsonLd}
      />

      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl text-foreground mb-3">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Get in touch with us for reservations, orders, or any inquiries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-card rounded-2xl p-6 border border-border shadow-sm flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg text-foreground mb-1">
                      {card.title}
                    </h3>
                    {card.lines.map((line) => (
                      <p key={line} className="text-muted-foreground text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <h2 className="text-2xl text-foreground mb-6 font-heading">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="First Name"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      className={errors.firstName ? "border-destructive" : ""}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-destructive">
                        {String(errors.firstName.message)}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Last Name"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                      className={errors.lastName ? "border-destructive" : ""}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-destructive">
                        {String(errors.lastName.message)}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">
                        {String(errors.email.message)}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Phone"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">
                        {String(errors.phone.message)}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    rows={4}
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">
                      {String(errors.message.message)}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl overflow-hidden border-4 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] h-[450px]">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.8878246618324!2d145.11753237570076!3d-37.933050971945924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66b0003229309%3A0xf08dfbcfd90ba809!2sIndian%20Food%20Court%20%7C%20Khau%20Gali!5e0!3m2!1sen!2sin!4v1772680334304!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.8878246618324!2d145.11753237570076!3d-37.933050971945924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66b0003229309%3A0xf08dfbcfd90ba809!2sIndian%20Food%20Court%20%7C%20Khau%20Gali!5e0!3m2!1sen!2sin!4v1772680334304!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default ContactPage;