
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface BookCoverProps {
  color: string;
  title: string;
  subtitle?: string;
  className?: string;
  style?: CSSProperties;
}

export function BookCover({ color, title, subtitle, className, style }: BookCoverProps) {
  return (
    <div 
      className={cn(
        "w-full max-w-[200px] aspect-[3/4] rounded-lg shadow-lg flex flex-col items-center justify-center p-4 text-white font-bold", 
        className
      )}
      style={{ background: color, ...style }}
    >
      <div className="text-center">
        <h3 className="text-lg font-extrabold leading-tight">{title}</h3>
        {subtitle && <p className="text-sm mt-1 opacity-90">{subtitle}</p>}
      </div>
    </div>
  );
}
