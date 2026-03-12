export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectBlock =
  | {
      type: "full";
      image: ProjectImage;
      caption?: string;
    }
  | {
      type: "pair";
      left: ProjectImage;
      right: ProjectImage;
      caption?: string;
    }
  | {
      type: "text";
      title?: string;
      content: string;
    };

export type Project = {
  slug: string;
  title: string;
  year: string;
  location: string;
  medium: string;
  duration: string;
  intro: string;
  cover: ProjectImage;
  tags: string[];
  blocks: ProjectBlock[];
};
