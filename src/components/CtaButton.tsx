
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CtaButtonProps {
  children: ReactNode;
  className?: string;
  large?: boolean;
  onClick?: () => void;
}

export function CtaButton({ children, className, large = false, onClick }: CtaButtonProps) {
  return (
    <button
      className={cn(
        "relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-full shadow-lg",
        "hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-indigo-600 before:to-purple-600 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        large ? "text-lg md:text-xl px-8 md:px-10 py-4" : "px-6 py-3",
        "transform transition-all duration-300 hover:scale-[1.02]",
        "border border-white/10",
        className
      )}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
