import { Project } from "@/types/project";

export const winterGathering: Project = {
  slug: "winter-gathering",
  title: "冬夜小聚",
  year: "2025",
  location: "室内家庭聚会",
  medium: "Digital Photography",
  duration: "One Evening",
  intro:
    "一场普通的冬夜聚餐，从人像、备菜到桌面细节，记录朋友之间的松弛与靠近。画面不追求事件高潮，而是保留说话、等待、碰杯与散场前的余温。",
  cover: {
    src: "/images/projects/winter-gathering/cover.jpg",
    alt: "围桌举杯的瞬间。",
    width: 5712,
    height: 4284,
  },
  tags: ["朋友", "餐桌", "日常叙事"],
  blocks: [
    {
      type: "text",
      title: "项目文字",
      content:
        "这组照片想呈现一种熟人之间的时间密度：有人在讲、有人在听，有人低头夹菜，也有人起身拿杯。空间很小，但关系在画面里被不断放大。食材、酒饮和桌面残局并非背景，而是这晚共同记忆的证词。",
    },
    {
      type: "pair",
      left: {
        src: "/images/projects/winter-gathering/01.jpg",
        alt: "餐桌边的男性肖像。",
        width: 2268,
        height: 4032,
      },
      right: {
        src: "/images/projects/winter-gathering/02.jpg",
        alt: "餐桌旁交谈中的人物。",
        width: 3088,
        height: 2316,
      },
      caption: "先是寒暄，然后对话慢慢进入状态。",
    },
    {
      type: "full",
      image: {
        src: "/images/projects/winter-gathering/03.jpg",
        alt: "围坐餐桌的群像。",
        width: 5712,
        height: 4284,
      },
      caption: "聚在一张桌前，临时组成一晚的共同体。",
    },
    {
      type: "pair",
      left: {
        src: "/images/projects/winter-gathering/05.jpg",
        alt: "多人入镜的合照瞬间。",
        width: 3088,
        height: 2316,
      },
      right: {
        src: "/images/projects/winter-gathering/06.jpg",
        alt: "饭桌另一侧的人物组合。",
        width: 4032,
        height: 3024,
      },
      caption: "镜头在餐桌两侧往返，关系也在互动里被看见。",
    },
    {
      type: "pair",
      left: {
        src: "/images/projects/winter-gathering/04.jpg",
        alt: "酒饮与瓶罐的静物画面。",
        width: 5712,
        height: 4284,
      },
      right: {
        src: "/images/projects/winter-gathering/07.jpg",
        alt: "散场后桌面上的卡牌局。",
        width: 1080,
        height: 1920,
      },
      caption: "食物与游戏接管了后半夜，热闹转为余韵。",
    },
  ],
};