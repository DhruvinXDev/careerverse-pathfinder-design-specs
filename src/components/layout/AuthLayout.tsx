
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  showSignInLink?: boolean;
  showSignUpLink?: boolean;
}

export function AuthLayout({
  children,
  title,
  description,
  showSignInLink = false,
  showSignUpLink = false,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-muted/30 grid lg:grid-cols-2">
      <div className="hidden lg:block relative">
        <div className="absolute inset-0 bg-gradient-to-br from-career-600 to-career-900 flex flex-col justify-between p-8 text-white">
          <div>
            <Link
              to="/"
              className="text-white font-bold text-xl flex items-center gap-2"
            >
              <span>Career</span>
              <span>Verse</span>
            </Link>
          </div>
          <div className="max-w-md">
            <h1 className="text-3xl font-bold mb-4">
              Accelerate Your Career Journey
            </h1>
            <p className="text-white/80">
              CareerVerse helps you build your professional path with AI-powered
              tools, expert mentors, and a supportive community. Navigate your career
              with confidence.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <h3 className="text-lg font-medium">Career Roadmaps</h3>
                <p className="text-white/70 text-sm mt-1">
                  Personalized career planning
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <h3 className="text-lg font-medium">AI Resume Builder</h3>
                <p className="text-white/70 text-sm mt-1">
                  Stand out from the crowd
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <h3 className="text-lg font-medium">Expert Mentoring</h3>
                <p className="text-white/70 text-sm mt-1">
                  Learn from professionals
                </p>
              </div>
            </div>
          </div>
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} CareerVerse. All rights reserved.
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">{title}</h1>
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </div>
          {children}
          <div className="text-center text-sm">
            {showSignInLink && (
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-career-600 hover:underline">
                  Sign in
                </Link>
              </p>
            )}
            {showSignUpLink && (
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-career-600 hover:underline">
                  Sign up
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
