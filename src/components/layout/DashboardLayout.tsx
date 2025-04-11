
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { PageContainer } from "./PageContainer";

interface DashboardLayoutProps {
  children: ReactNode;
  userType?: "student" | "mentor" | "admin";
  userName?: string;
  userAvatar?: string;
  showFooter?: boolean;
}

export function DashboardLayout({
  children,
  userType = "student",
  userName = "User Account",
  userAvatar,
  showFooter = true
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar userName={userName} userAvatar={userAvatar} userType={userType} />
      <div className="flex flex-1">
        <Sidebar userType={userType} />
        <div className="flex-1 pl-0 lg:pl-64">
          <PageContainer>{children}</PageContainer>
        </div>
      </div>
      {showFooter && <Footer />}
    </div>
  );
}
