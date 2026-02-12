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

  // For 3 visible cards, max index is reviews.length - 3
  const maxIndex = reviews.length - 3;

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

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

        <div className="relative max-w-5xl mx-auto">
          {/* Nav arrows */}
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

          {/* Cards container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.name} className="w-1/3 flex-shrink-0 px-2 sm:px-3">
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
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-7" : "bg-muted-foreground/30 w-2.5"
                }`}
                aria-label={`Go to review group ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile: show 1 card */}
        <style>{`
          @media (max-width: 767px) {
            #reviews .max-w-5xl { display: none; }
          }
        `}</style>
        <MobileReviews />
      </div>
    </section>
  );
};

/* Mobile: single card carousel */
const MobileReviews = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="md:hidden">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {reviews.map((review) => (
            <div key={review.name} className="w-full flex-shrink-0 px-2">
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border text-center">
                <div className="flex gap-0.5 mb-3 justify-center">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">"{review.text}"</p>
                <p className="text-muted-foreground font-bold text-sm">— {review.name}</p>
              </div>
            </div>
          ))}
        </div>
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
