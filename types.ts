
export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  techs: string[];
  result?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Language' | 'Framework' | 'Tool' | 'DevOps';
}
