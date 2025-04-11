
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combine class names with Tailwind's merge functionality
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Color theme utilities
export const colorThemes = {
  primary: {
    light: "hsl(230, 70%, 55%)",
    dark: "hsl(230, 60%, 45%)",
    contrast: "hsl(210, 40%, 98%)"
  },
  accent: {
    light: "hsl(262, 70%, 60%)",
    dark: "hsl(262, 60%, 50%)",
    contrast: "hsl(210, 40%, 98%)"
  },
  neutral: {
    light: "hsl(214, 25%, 90%)",
    medium: "hsl(215, 15%, 45%)",
    dark: "hsl(220, 40%, 15%)"
  }
};

// Gradient generators
export const gradients = {
  primaryToAccent: "bg-gradient-to-r from-primary to-accent",
  accentToPrimary: "bg-gradient-to-l from-primary to-accent",
  primaryVertical: "bg-gradient-to-b from-primary to-primary/70",
  accentVertical: "bg-gradient-to-b from-accent to-accent/70",
  subtleBackground: "bg-gradient-to-br from-background to-muted/50",
  careerGlow: "bg-gradient-to-r from-career-400 to-career-600",
  coolBlue: "bg-gradient-to-r from-blue-400 to-cyan-500",
  warmPurple: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
  glassEffect: "bg-white/10 backdrop-blur-md dark:bg-black/20"
};

// Animation classes
export const animations = {
  fadeIn: "animate-fade-in",
  scaleIn: "animate-scale-in",
  pulseGentle: "animate-pulse-gentle",
  float: "animate-float",
  glow: "animate-glow",
  slideUp: "transform transition-transform duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
  slideRight: "transform transition-transform duration-300 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
  expandBorder: "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
};

// Card style variants
export const cardStyles = {
  default: "enhanced-card",
  minimal: "rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md",
  gradient: "animated-gradient-border",
  stat: "stat-card",
  glass: "glass-effect rounded-lg border border-white/20 dark:border-white/5 p-4",
  shine: "shine-card rounded-lg border bg-card p-4 shadow-sm",
  featured: "rounded-lg border-l-4 border-l-accent bg-card p-4 shadow-sm"
};

// Button style variants
export const buttonStyles = {
  primary: "button-glow",
  accent: "button-glow bg-accent text-accent-foreground",
  outlined: "border-2 border-primary/30 hover:border-primary/60 transition-colors duration-300",
  threedee: "button-3d",
  ghost: "hover:bg-secondary/70 transition-colors duration-200"
};

// Text style variants
export const textStyles = {
  gradient: "gradient-heading",
  muted: "text-muted-foreground",
  small: "text-sm",
  lead: "text-xl leading-7",
  balance: "balance-text",
  highlight: "bg-accent/10 text-accent px-1 py-0.5 rounded"
};

// Layout utilities
export const layoutStyles = {
  container: "container mx-auto px-4 sm:px-6 lg:px-8",
  section: "py-12 md:py-16 lg:py-20",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex items-center justify-between",
  glass: "glass-effect"
};
