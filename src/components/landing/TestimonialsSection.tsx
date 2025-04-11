
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: "students",
    title: "Students",
    testimonials: [
      {
        quote:
          "CareerVerse completely transformed my job search. The resume analyzer fixed issues I didn't even know existed, and the mock interviews helped me land my dream role in tech.",
        name: "Jessica Chen",
        role: "Computer Science Graduate",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&q=80",
      },
      {
        quote:
          "The career roadmap feature gave me clarity about what steps to take next. I connected with an amazing mentor who's been guiding me through my transition into data science.",
        name: "Marcus Johnson",
        role: "Career Changer",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&auto=format&q=80",
      },
      {
        quote:
          "I was overwhelmed with options after graduation. CareerVerse helped me understand the job market, refine my skills, and connect with opportunities aligned with my interests.",
        name: "Priya Patel",
        role: "Recent Graduate",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&auto=format&q=80",
      },
    ],
  },
  {
    id: "mentors",
    title: "Mentors",
    testimonials: [
      {
        quote:
          "As a mentor, CareerVerse makes it easy to connect with students who are truly interested in my field. The platform handles scheduling and communication, letting me focus on providing valuable guidance.",
        name: "David Rodriguez",
        role: "Senior Software Engineer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&auto=format&q=80",
      },
      {
        quote:
          "I've mentored on several platforms, but CareerVerse offers the most comprehensive tools. Being able to track mentees' progress and recommend specific resources makes mentoring more effective.",
        name: "Sarah Williams",
        role: "Marketing Director",
        avatar: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=150&h=150&auto=format&q=80",
      },
      {
        quote:
          "The webinar hosting features are outstanding. I can easily create engaging sessions, and the platform helps me connect with students who genuinely benefit from my experience.",
        name: "Michael Chang",
        role: "Product Manager",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&q=80",
      },
    ],
  },
  {
    id: "employers",
    title: "Employers",
    testimonials: [
      {
        quote:
          "We've hired multiple graduates through CareerVerse. The platform's skill verification and career readiness metrics help us identify candidates who are truly prepared for the roles we offer.",
        name: "Jennifer Howard",
        role: "Talent Acquisition Manager",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&auto=format&q=80",
      },
      {
        quote:
          "The quality of candidates we connect with through CareerVerse is consistently high. Their focus on practical skills development shows in the readiness of applicants we interview.",
        name: "Robert Stevens",
        role: "CTO at TechStart",
        avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=150&h=150&auto=format&q=80",
      },
      {
        quote:
          "Hosting webinars on CareerVerse has been an excellent way to connect with potential hires while providing value to the community. It's become a key part of our recruitment strategy.",
        name: "Alicia Washington",
        role: "HR Director",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&auto=format&q=80",
      },
    ],
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Stories from Our Community
          </h2>
          <p className="mt-4 text-xl text-muted-foreground mx-auto max-w-2xl">
            Hear from students, mentors, and employers who've experienced the
            CareerVerse difference
          </p>
        </div>

        <Tabs defaultValue="students" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="mentors">Mentors</TabsTrigger>
              <TabsTrigger value="employers">Employers</TabsTrigger>
            </TabsList>
          </div>

          {testimonials.map((group) => (
            <TabsContent
              key={group.id}
              value={group.id}
              className="mt-0 animate-fade-in"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {group.testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-card overflow-hidden h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Quote className="h-8 w-8 text-career-500/30 mb-4" />
                      <p className="text-foreground flex-1">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-6 flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
