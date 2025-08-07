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

export type FileSystem = {
  name: string;
  icon: string;
  folders: Record<string, Folder>;
};

export type Folder = {
  files?: string[];
  folders?: Record<string, Folder>; // nested folders (optional)
};
