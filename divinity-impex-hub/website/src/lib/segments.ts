export type SegmentId = "titan-core" | "reshu" | "nova" | "rizwan-adatia";

export interface Segment {
  id: SegmentId;
  name: string;
  tagline: string;
  description: string;
  href: string;
  accent: string;
  accentLight: string;
  gradient: string;
  icon: "dumbbell" | "sparkles" | "compass" | "crown";
  number: string;
}

export const segments: Segment[] = [
  {
    id: "titan-core",
    name: "Titan Core",
    tagline: "Sports Supplement Range",
    description:
      "Cutting-edge nutrition and performance products engineered for athletes and modern health enthusiasts worldwide.",
    href: "/titan-core",
    accent: "#006BB3",
    accentLight: "#E6F3FA",
    gradient: "from-[#006BB3] via-[#0088CC] to-[#004A7C]",
    icon: "dumbbell",
    number: "01",
  },
  {
    id: "reshu",
    name: "Reshu",
    tagline: "FMCG / Personal Care Range",
    description:
      "Elegant personal care solutions crafted for daily luxury, skincare excellence, and everyday indulgence.",
    href: "/reshu",
    accent: "#C45B7A",
    accentLight: "#FDF2F5",
    gradient: "from-[#C45B7A] via-[#D47894] to-[#9E3D5C]",
    icon: "sparkles",
    number: "02",
  },
  {
    id: "nova",
    name: "NOVA Inner Compass",
    tagline: "Leadership & Human Development",
    description:
      "Experiential leadership programs transforming corporates, schools, and institutions through human performance.",
    href: "/nova",
    accent: "#0E7C7B",
    accentLight: "#E8F5F5",
    gradient: "from-[#0E7C7B] via-[#12A09E] to-[#065E5D]",
    icon: "compass",
    number: "03",
  },
  {
    id: "rizwan-adatia",
    name: "Rizwan Adatia",
    tagline: "Entrepreneur · Philanthropist · Speaker",
    description:
      "Purpose-driven leadership, global philanthropy, and the Human for Humans movement uplifting millions.",
    href: "/rizwan-adatia",
    accent: "#B8860B",
    accentLight: "#FBF6E8",
    gradient: "from-[#B8860B] via-[#D4A017] to-[#8B6508]",
    icon: "crown",
    number: "04",
  },
];

export function getSegment(id: SegmentId): Segment | undefined {
  return segments.find((s) => s.id === id);
}
