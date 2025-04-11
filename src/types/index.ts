
export type EventType = "mentorship" | "webinar" | "workshop";
export type ResourceType = "course" | "article" | "template" | "video" | "mentor";

export interface Event {
  id: string;
  title: string;
  type: EventType;
  date: string;
  time: string;
  participants: number;
  host: string;
}

export interface Resource {
  id: string;
  title: string;
  type: ResourceType;
  author: string;
  duration?: string;
  rating: number;
  tags: string[];
  url: string;
}

export interface Skill {
  id: string;
  name: string;
  progress: number;
  category: string;
}
