
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combine class names with Tailwind's merge functionality
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Color theme utilities
export const colorThemes = {
  primary: {
    light: "hsl(222, 83%, 55%)",
    dark: "hsl(222, 83%, 45%)",
    contrast: "hsl(210, 40%, 98%)"
  },
  accent: {
    light: "hsl(262, 83%, 58%)",
    dark: "hsl(262, 83%, 48%)",
    contrast: "hsl(210, 40%, 98%)"
  },
  neutral: {
    light: "hsl(214, 32%, 91%)",
    medium: "hsl(215, 16%, 47%)",
    dark: "hsl(222, 47%, 11%)"
  }
};

// Gradient generators
export const gradients = {
  primaryToAccent: "bg-gradient-to-r from-primary to-accent",
  accentToPrimary: "bg-gradient-to-l from-primary to-accent",
  primaryVertical: "bg-gradient-to-b from-primary to-primary/70",
  accentVertical: "bg-gradient-to-b from-accent to-accent/70",
  subtleBackground: "bg-gradient-to-br from-background to-muted/50"
};

// Animation classes
export const animations = {
  fadeIn: "animate-fade-in",
  scaleIn: "animate-scale-in",
  pulseGentle: "animate-pulse-gentle",
  float: "animate-float",
  glow: "animate-glow"
};

// Card style variants
export const cardStyles = {
  default: "enhanced-card",
  minimal: "rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md",
  gradient: "animated-gradient-border",
  stat: "stat-card"
};

// Button style variants
export const buttonStyles = {
  primary: "button-glow",
  accent: "button-glow bg-accent text-accent-foreground",
  outlined: "border-2 border-primary/30 hover:border-primary/60 transition-colors duration-300"
};
