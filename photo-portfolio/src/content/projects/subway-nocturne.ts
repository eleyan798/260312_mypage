import { Project } from "@/types/project";

export const subwayNocturne: Project = {
  slug: "subway-nocturne",
  title: "Subway Nocturne",
  year: "2023",
  location: "Shanghai",
  medium: "Archival pigment print",
  duration: "Single season",
  intro:
    "Night rides through outer-ring stations where fluorescent tones flatten gestures and architecture becomes a stage for waiting.",
  cover: {
    src: "/images/projects/subway-nocturne/cover.svg",
    alt: "Subway platform at midnight.",
    width: 1600,
    height: 1120,
  },
  tags: ["Urban", "Night", "Transit"],
  blocks: [
    {
      type: "full",
      image: {
        src: "/images/projects/subway-nocturne/01.svg",
        alt: "Escalator and reflective panel.",
        width: 1600,
        height: 1120,
      },
    },
    {
      type: "pair",
      left: {
        src: "/images/projects/subway-nocturne/02.svg",
        alt: "Passenger silhouette by train window.",
        width: 1200,
        height: 1500,
      },
      right: {
        src: "/images/projects/subway-nocturne/03.svg",
        alt: "Blue-tinted corridor.",
        width: 1200,
        height: 1500,
      },
      caption: "Line 16 / Last train",
    },
    {
      type: "text",
      content:
        "The sequence avoids dramatic moments and stays with transitions: arrival, pause, departure. Each frame is positioned to keep the eye moving at a slow pace.",
    },
    {
      type: "full",
      image: {
        src: "/images/projects/subway-nocturne/04.svg",
        alt: "Empty station benches under cold light.",
        width: 1600,
        height: 1120,
      },
    },
  ],
};
