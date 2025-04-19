
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

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
        "relative overflow-hidden bg-gradient-to-r from-primary to-primary-soft text-white font-bold rounded-full shadow-soft-purple",
        "hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary-soft before:to-primary before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        large ? "text-lg md:text-xl px-8 md:px-10 py-4" : "px-6 py-3",
        "transform transition-all duration-300 hover:scale-[1.02]",
        "border border-white/10",
        className
      )}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}
