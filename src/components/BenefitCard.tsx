
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function BenefitCard({ title, description, icon: Icon, className }: BenefitCardProps) {
  return (
    <div className={cn("bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg", className)}>
      <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
