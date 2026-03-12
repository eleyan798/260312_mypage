import { Project } from "@/types/project";

export const quietTide: Project = {
  slug: "quiet-tide",
  title: "Quiet Tide",
  year: "2021-2024",
  location: "Zhoushan / Shanghai",
  medium: "Digital C-print",
  duration: "Ongoing",
  intro:
    "A long observation of coastlines where logistics, weather, and private memory overlap. The series follows low-contrast moments and suspended gestures near the sea.",
  cover: {
    src: "/images/projects/quiet-tide/cover.svg",
    alt: "A pale seascape with a distant horizon.",
    width: 1600,
    height: 1120,
  },
  tags: ["Coast", "Daily landscape", "Color"],
  blocks: [
    {
      type: "full",
      image: {
        src: "/images/projects/quiet-tide/05.jpg",
        alt: "Containers seen from a damp pier.",
        width: 1600,
        height: 1120,
      },
      caption: "Dawn shift, 05:42",
    },
    {
      type: "text",
      title: "Notes",
      content:
        "Most frames are made between tides, when movement is reduced but not absent. I keep distance and work with muted transitions in light.",
    },
    {
      type: "pair",
      left: {
        src: "/images/projects/quiet-tide/02.svg",
        alt: "A breakwater in fog.",
        width: 1200,
        height: 1500,
      },
      right: {
        src: "/images/projects/quiet-tide/03.svg",
        alt: "Rope and rust near harbor edge.",
        width: 1200,
        height: 1500,
      },
      caption: "Between departures",
    },
    {
      type: "full",
      image: {
        src: "/images/projects/quiet-tide/04.svg",
        alt: "A long empty coastal road.",
        width: 1600,
        height: 1120,
      },
    },
  ],
};
