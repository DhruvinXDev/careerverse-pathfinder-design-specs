
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-career-50 to-gray-100 opacity-80 dark:from-gray-900 dark:to-gray-950 dark:opacity-100"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl text-left">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            <span className="block text-foreground">Your AI-Powered</span>
            <span className="block gradient-heading sm:text-5xl lg:text-6xl">Career Success Partner</span>
          </h1>

          <p className="mt-4 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Navigate your career journey with confidence using personalized guidance,
            intelligent tools, and expert mentors in one integrated platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link to="/register">
                Get Started
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-sm">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block h-8 w-8 rounded-full bg-gray-200 ring-2 ring-white dark:bg-gray-700 dark:ring-gray-900"></div>
                ))}
              </div>
              <span className="ml-2 text-muted-foreground">
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
              <span className="ml-2 text-muted-foreground">
                4.9/5 average rating
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 -z-10 hidden w-1/2 lg:block">
        <div className="relative h-full w-full">
          <div className="absolute right-0 top-0 h-[500px] w-[800px] bg-career-500/10 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
