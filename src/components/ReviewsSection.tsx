import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const reviews = [
  { name: "Sarah M.", text: "Best pizza I've had in Clayton. Love the slices!", rating: 5 },
  { name: "James K.", text: "The crispy corners are addictive. We order every Friday!", rating: 5 },
  { name: "Priya L.", text: "Finally a pizza that's easy to share at parties. Game changer.", rating: 5 },
  { name: "Daniel R.", text: "Rectangle pizza? Sounded weird. Tasted incredible. 10/10.", rating: 5 },
  { name: "Mia T.", text: "Our family's new favorite. Kids love the perfect slices!", rating: 5 },
  { name: "Liam W.", text: "Ordered for game night — everyone was impressed. Will order again!", rating: 5 },
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

  // Get 3 visible cards using modular index for infinite loop
  const getVisibleIndices = () => {
    return [
      current % reviews.length,
      (current + 1) % reviews.length,
      (current + 2) % reviews.length,
    ];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            What People <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Don't just take our word for it — hear from our happy customers!
          </p>
        </div>

        {/* Desktop: 3 cards */}
        <div className="relative max-w-5xl mx-auto hidden md:block">
          <button
            onClick={prev}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-3 gap-4">
            {visibleIndices.map((idx) => {
              const review = reviews[idx];
              return (
                <div key={`${idx}-${review.name}`} className="px-1">
                  <div className="bg-card rounded-2xl p-6 shadow-md border border-border text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="flex gap-0.5 mb-3 justify-center">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-foreground mb-4 text-sm sm:text-base leading-relaxed">
                        "{review.text}"
                      </p>
                    </div>
                    <p className="text-muted-foreground font-bold text-sm">— {review.name}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-7" : "bg-muted-foreground/30 w-2.5"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile: 1 card */}
        <MobileReviews />
      </div>
    </section>
  );
};

const MobileReviews = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const review = reviews[current];

  return (
    <div className="md:hidden">
      <div className="bg-card rounded-2xl p-6 shadow-md border border-border text-center">
        <div className="flex gap-0.5 mb-3 justify-center">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-foreground mb-4 leading-relaxed">"{review.text}"</p>
        <p className="text-muted-foreground font-bold text-sm">— {review.name}</p>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-7" : "bg-muted-foreground/30 w-2.5"
            }`}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
