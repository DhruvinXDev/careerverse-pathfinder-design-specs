
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-career-50/90 to-gray-100/80 dark:from-gray-900 dark:to-gray-950 dark:opacity-100"></div>
      
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span className="block text-foreground">Your AI-Powered</span>
            <span className="block gradient-heading sm:text-5xl lg:text-6xl">Career Success Partner</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Navigate your career journey with confidence using personalized guidance,
            intelligent tools, and expert mentors in one integrated platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="button-3d group" asChild>
              <Link to="/register" className="flex items-center gap-2">
                Get Started
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="button-3d" asChild>
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6 text-sm">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block h-8 w-8 rounded-full bg-primary/10 ring-2 ring-white dark:ring-gray-900">
                    <img 
                      src={`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&auto=format&q=80&fit=crop&crop=faces&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww`} 
                      alt="User"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="ml-3 text-muted-foreground font-medium">
                Join 5,000+ users
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-3 text-muted-foreground font-medium">
                4.9/5 average rating
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border border-accent/10 animate-[spin_30s_linear_infinite]"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full border border-primary/20 animate-[spin_15s_linear_infinite]"></div>
    </div>
  );
}
