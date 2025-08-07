import { LucideIcon } from "lucide-react";

export type TaskbarItem = {
  id: string;
  name: string;
  icon: LucideIcon;
  iconSize: number;
  iconFill?: string;
  iconColor?: string;
  iconStroke?: string;
  type: "app" | "system" | "utility";
  isActive?: boolean;
  isPinned?: boolean;
  action: () => void;
};
