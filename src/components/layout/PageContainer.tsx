
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "default" | "tight" | "loose";
}

export function PageContainer({
  children,
  className,
  padding = "default"
}: PageContainerProps) {
  return (
    <div
      className={cn(
        "w-full",
        padding === "none" && "p-0",
        padding === "default" && "p-4 md:p-6 lg:p-8",
        padding === "tight" && "p-2 md:p-4",
        padding === "loose" && "p-6 md:p-8 lg:p-10",
        className
      )}
    >
      {children}
    </div>
  );
}
