
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BellIcon,
  MenuIcon,
  Search,
  User,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavbarProps {
  userName?: string;
  userAvatar?: string;
  userType?: "student" | "mentor" | "admin";
}

export function Navbar({ userName, userAvatar, userType = "student" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const NavLinks = () => (
    <div className="flex items-center gap-6">
      <Link to="/" className="nav-link">Home</Link>
      {userType === "admin" && <Link to="/admin" className="nav-link">Admin</Link>}
      {userType === "mentor" && <Link to="/mentor" className="nav-link">Mentor</Link>}
      <Link to="/explore" className="nav-link">Explore</Link>
      <Link to="/learn" className="nav-link">Learn</Link>
      <Link to="/network" className="nav-link">Network</Link>
      <Link to="/resources" className="nav-link">Resources</Link>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
            <span className="text-career-500">Career</span>
            <span>Verse</span>
          </Link>
          {!isMobile && <div className="ml-10"><NavLinks /></div>}
        </div>

        <div className="flex items-center gap-4">
          {userName ? (
            <>
              <Button variant="ghost" size="icon" className="relative">
                <BellIcon className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-career-500 rounded-full"></span>
              </Button>
              
              <div className="flex items-center gap-3">
                <Link to="/profile" className="flex items-center gap-2">
                  <div className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
                    {userAvatar ? (
                      <img
                        src={userAvatar}
                        alt={userName}
                        className="aspect-square h-full w-full"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                        <User className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  {!isMobile && (
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-medium">{userName}</span>
                      <span className="text-xs text-muted-foreground capitalize">{userType}</span>
                    </div>
                  )}
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline">Log In</Button>
              </Link>
              <Link to="/register">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && (
        <div
          className={cn(
            "fixed inset-x-0 top-16 z-40 flex flex-col bg-background border-b px-4 py-4 shadow-md transition-all duration-300 ease-in-out",
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-4">
            <NavLinks />
            <div className="pt-2 border-t">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/search" className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  <span>Search</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
