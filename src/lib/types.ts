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

export type File = {
  fileName: string;
  fileExtension: string;
  fileContents: {
    text: string;
  };
};

export type Subfolder = {
  files: File[];
};

export type FolderData = {
  name: string;
  icon: React.ReactNode;
  folders: {
    [key: string]: Subfolder;
  };
};
