import { Crown, Compass, Dumbbell, Sparkles, type LucideIcon } from "lucide-react";
import type { Segment } from "@/lib/segments";

const iconMap: Record<Segment["icon"], LucideIcon> = {
  dumbbell: Dumbbell,
  sparkles: Sparkles,
  compass: Compass,
  crown: Crown,
};

export function SegmentIcon({ segment, className }: { segment: Segment; className?: string }) {
  const Icon = iconMap[segment.icon];
  return <Icon className={className} aria-hidden />;
}
