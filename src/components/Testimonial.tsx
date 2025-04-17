
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  text: string;
  stars?: number;
  className?: string;
}

export function Testimonial({ name, text, stars = 5, className }: TestimonialProps) {
  return (
    <div className={cn("bg-white p-6 rounded-xl shadow-md", className)}>
      <div className="flex mb-2">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 italic mb-4">"{text}"</p>
      <p className="font-bold">{name}</p>
    </div>
  );
}
