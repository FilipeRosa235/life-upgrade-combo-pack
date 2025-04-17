
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
        "bg-highlight text-white font-bold rounded-full shadow-lg transition-all duration-300",
        "hover:shadow-xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-highlight/50 focus:ring-offset-2",
        "animate-pulse-slow",
        large ? "text-lg md:text-xl px-8 md:px-10 py-4" : "px-6 py-3",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
