import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const reviews = [
  { name: "Sarah M.", text: "Best pizza I've had in Clayton. Love the slices!", rating: 5, role: "Regular Customer" },
  { name: "James K.", text: "The crispy corners are addictive. We order every Friday!", rating: 5, role: "Pizza Lover" },
  { name: "Priya L.", text: "Finally a pizza that's easy to share at parties. Game changer.", rating: 5, role: "Party Host" },
  { name: "Daniel R.", text: "Rectangle pizza? Sounded weird. Tasted incredible. 10/10.", rating: 5, role: "First-Timer" },
  { name: "Mia T.", text: "Our family's new favorite. Kids love the perfect slices!", rating: 5, role: "Happy Mom" },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="reviews" className="py-20 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-primary/5 blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-foreground mb-3">
            What People <span className="text-primary">Say</span>
          </h2>
          <p className="text-secondary-foreground/60 max-w-md mx-auto">
            Don't just take our word for it — hear from our happy customers!
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-14 z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/85 flex items-center justify-center transition-all shadow-lg"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.name} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card rounded-3xl p-8 sm:p-10 shadow-xl border border-border text-center relative">
                    <Quote className="w-10 h-10 text-primary/20 mx-auto mb-4" />
                    <p className="text-foreground mb-6 text-lg sm:text-xl leading-relaxed font-medium">
                      "{review.text}"
                    </p>
                    <div className="flex gap-1 mb-4 justify-center">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 text-primary font-bold text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <p className="text-foreground font-bold text-lg">{review.name}</p>
                    <p className="text-muted-foreground text-sm">{review.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-14 z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/85 flex items-center justify-center transition-all shadow-lg"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2.5 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-8" : "bg-secondary-foreground/20 w-2.5"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
