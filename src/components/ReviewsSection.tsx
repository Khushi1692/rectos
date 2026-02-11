import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah M.", text: "Best pizza I've had in Clayton. Love the slices!", rating: 5 },
  { name: "James K.", text: "The crispy corners are addictive. We order every Friday!", rating: 5 },
  { name: "Priya L.", text: "Finally a pizza that's easy to share at parties. Game changer.", rating: 5 },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-14">
          What People <span className="text-primary">Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {reviews.map((review) => (
            <div key={review.name} className="bg-card rounded-2xl p-6 shadow-md border border-border">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{review.text}"</p>
              <p className="text-muted-foreground font-semibold text-sm">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
