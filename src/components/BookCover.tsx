
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface BookCoverProps {
  color?: string;
  title: string;
  subtitle?: string;
  className?: string;
  style?: CSSProperties;
  image?: string;
}

export function BookCover({ color = "#9b87f5", title, subtitle, className, style, image }: BookCoverProps) {
  if (image) {
    return (
      <div 
        className={cn(
          "w-full max-w-[200px] aspect-[3/4] rounded-lg shadow-lg overflow-hidden relative group",
          "transform transition-all duration-300 hover:scale-105",
          className
        )}
        style={style}
      >
        <div className="w-full h-full bg-white flex items-center justify-center">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-contain"  // Mudei de object-cover para object-contain
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="text-white">
            <h3 className="text-lg font-extrabold leading-tight text-shadow">{title}</h3>
            {subtitle && <p className="text-sm mt-1 opacity-90 text-shadow">{subtitle}</p>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={cn(
        "w-full max-w-[200px] aspect-[3/4] rounded-lg shadow-lg flex flex-col items-center justify-center p-4 text-white font-bold transform transition-all duration-300 hover:scale-105", 
        className
      )}
      style={{ background: color, ...style }}
    >
      <div className="text-center">
        <h3 className="text-lg font-extrabold leading-tight text-shadow">{title}</h3>
        {subtitle && <p className="text-sm mt-1 opacity-90 text-shadow">{subtitle}</p>}
      </div>
    </div>
  );
}
