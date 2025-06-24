export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}