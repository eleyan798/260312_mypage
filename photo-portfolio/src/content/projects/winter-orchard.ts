import { Project } from "@/types/project";

export const winterOrchard: Project = {
  slug: "winter-orchard",
  title: "Winter Orchard",
  year: "2020-2022",
  location: "Yantai",
  medium: "Digital / Book dummy",
  duration: "Completed",
  intro:
    "A family orchard documented during dormant seasons. The project studies labor rhythm, inherited land, and light under overcast winter skies.",
  cover: {
    src: "/images/projects/winter-orchard/cover.svg",
    alt: "Bare fruit trees in winter.",
    width: 1600,
    height: 1120,
  },
  tags: ["Family archive", "Rural", "Winter"],
  blocks: [
    {
      type: "full",
      image: {
        src: "/images/projects/winter-orchard/01.svg",
        alt: "Rows of trees and frost.",
        width: 1600,
        height: 1120,
      },
      caption: "Late December",
    },
    {
      type: "text",
      title: "Field note",
      content:
        "I returned every two weeks. The same plots changed slowly, and small differences in pruning, soil moisture, and cloud cover shaped the sequence.",
    },
    {
      type: "pair",
      left: {
        src: "/images/projects/winter-orchard/02.svg",
        alt: "Pruning tools on wooden crate.",
        width: 1200,
        height: 1500,
      },
      right: {
        src: "/images/projects/winter-orchard/03.svg",
        alt: "Hands tying branch.",
        width: 1200,
        height: 1500,
      },
      caption: "Maintenance routine",
    },
    {
      type: "full",
      image: {
        src: "/images/projects/winter-orchard/04.svg",
        alt: "Final light across orchard slope.",
        width: 1600,
        height: 1120,
      },
    },
  ],
};
