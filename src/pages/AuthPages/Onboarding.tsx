
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { BadgeCheck, ChevronRight, Upload } from "lucide-react";
import { AuthLayout } from "@/components/layout/AuthLayout";

export default function Onboarding() {
  const { userType } = useParams<{ userType: string }>();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Student profile data
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");
  
  // Mentor profile data
  const [expertise, setExpertise] = useState("");
  const [industry, setIndustry] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [company, setCompany] = useState("");
  const [mentorBio, setMentorBio] = useState("");
  const [mentorshipAreas, setMentorshipAreas] = useState("");
  
  const nextStep = () => {
    window.scrollTo(0, 0);
    setStep(step + 1);
  };

  const previousStep = () => {
    window.scrollTo(0, 0);
    setStep(step - 1);
  };

  const handleCompleteProfile = async () => {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Profile completed",
        description: "Your profile has been successfully set up!",
      });
      
      // Redirect to dashboard based on user type
      if (userType === "student") {
        navigate("/dashboard");
      } else if (userType === "mentor") {
        navigate("/mentor/dashboard");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while saving your profile.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout 
      title={userType === "student" ? "Student Profile Setup" : "Mentor Profile Setup"}
      description="Let's set up your profile to get the most out of CareerVerse"
    >
      <div className="space-y-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            {[1, 2, 3].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`h-2 w-8 rounded-full ${
                  step >= stepNumber
                    ? "bg-career-500"
                    : "bg-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            Step {step} of 3
          </span>
        </div>

        {userType === "student" ? (
          <>
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-xl font-semibold">Basic Information</h2>
                <div className="space-y-2">
                  <Label htmlFor="profile-picture">Profile Picture</Label>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                      <Upload className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <Button variant="outline" size="sm">
                      Upload
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="education">Education</Label>
                  <Select value={education} onValueChange={setEducation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                      <SelectItem value="master">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="skills">Skills (comma separated)</Label>
                  <Textarea
                    id="skills"
                    placeholder="e.g., JavaScript, React, UI/UX Design"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interests">Career Interests</Label>
                  <Select value={interests} onValueChange={setInterests}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select primary interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software-development">Software Development</SelectItem>
                      <SelectItem value="data-science">Data Science</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={nextStep} className="w-full">
                  Continue <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-xl font-semibold">Experience & Bio</h2>
                <div className="space-y-2">
                  <Label htmlFor="experience">Professional Experience</Label>
                  <Select value={experience} onValueChange={setExperience}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Experience</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                      <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                      <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                      <SelectItem value="senior">Senior (5+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself, your background, and career goals"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={5}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile (optional)</Label>
                  <Input
                    id="linkedin"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={previousStep} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={nextStep} className="flex-1">
                    Continue <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-xl font-semibold">Professional Information</h2>
                <div className="space-y-2">
                  <Label htmlFor="profile-picture">Profile Picture</Label>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                      <Upload className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <Button variant="outline" size="sm">
                      Upload
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expertise">Areas of Expertise (comma separated)</Label>
                  <Textarea
                    id="expertise"
                    placeholder="e.g., Software Development, Product Management, AI"
                    value={expertise}
                    onChange={(e) => setExpertise(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Select value={yearsOfExperience} onValueChange={setYearsOfExperience}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select years of experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="4-6">4-6 years</SelectItem>
                      <SelectItem value="7-10">7-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={nextStep} className="w-full">
                  Continue <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-xl font-semibold">Professional Details</h2>
                <div className="space-y-2">
                  <Label htmlFor="company">Current Company/Organization</Label>
                  <Input
                    id="company"
                    placeholder="e.g., Google, Microsoft, Self-employed"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mentorBio">Professional Bio</Label>
                  <Textarea
                    id="mentorBio"
                    placeholder="Tell us about your professional journey and expertise"
                    value={mentorBio}
                    onChange={(e) => setMentorBio(e.target.value)}
                    rows={5}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input
                    id="linkedin"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={previousStep} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={nextStep} className="flex-1">
                    Continue <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-xl font-semibold">
              {userType === "student" ? "Preferences" : "Mentorship Preferences"}
            </h2>
            
            {userType === "student" ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="goal">Primary Career Goal</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your primary goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="job">Find a new job</SelectItem>
                      <SelectItem value="skills">Develop new skills</SelectItem>
                      <SelectItem value="network">Build my network</SelectItem>
                      <SelectItem value="career-change">Change career path</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="learning-preferences">Learning Preferences</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="How do you prefer to learn?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="video">Video courses</SelectItem>
                      <SelectItem value="reading">Reading materials</SelectItem>
                      <SelectItem value="interactive">Interactive exercises</SelectItem>
                      <SelectItem value="mentorship">One-on-one mentorship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mentor-preferences">Mentor Preferences</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="What kind of mentor are you looking for?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="industry">Industry Expert</SelectItem>
                      <SelectItem value="career">Career Coach</SelectItem>
                      <SelectItem value="skills">Skills Trainer</SelectItem>
                      <SelectItem value="network">Networking Connector</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mentorship-areas">Mentorship Areas</Label>
                  <Textarea
                    id="mentorship-areas"
                    placeholder="What specific areas are you willing to mentor in?"
                    value={mentorshipAreas}
                    onChange={(e) => setMentorshipAreas(e.target.value)}
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability (hours per week)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 hours</SelectItem>
                      <SelectItem value="3-5">3-5 hours</SelectItem>
                      <SelectItem value="5-10">5-10 hours</SelectItem>
                      <SelectItem value="10+">10+ hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mentorship-style">Mentorship Style</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="How do you prefer to mentor?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="directive">Directive (Guiding with clear instructions)</SelectItem>
                      <SelectItem value="coaching">Coaching (Asking questions to help discover)</SelectItem>
                      <SelectItem value="collaborative">Collaborative (Working together)</SelectItem>
                      <SelectItem value="observational">Observational (Providing feedback)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
            
            <div className="rounded-lg bg-muted p-4 mt-6">
              <h3 className="font-medium flex items-center gap-2">
                <BadgeCheck className="text-career-500 h-5 w-5" />
                Almost Done!
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Your profile information helps us personalize your experience and connect you with the right {userType === "student" ? "mentors and opportunities" : "students who can benefit from your expertise"}.
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" onClick={previousStep} className="flex-1">
                Back
              </Button>
              <Button 
                onClick={handleCompleteProfile} 
                className="flex-1"
                disabled={isLoading}
              >
                {isLoading ? "Completing Profile..." : "Complete Profile"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </AuthLayout>
  );
}
