import { icons } from "lucide-react";
import { TaskbarItem } from "./lib/types";
// This file allows us to change any app icon or name!
// so this is awesome!

// This returns the array instead of exporting it directly
export const createTaskbarItems = ({
  openStartMenu,
  openNotepad,
  openSettings,
  openFileExplorer,
}: {
  openStartMenu: () => void;
  openNotepad: () => void;
  openSettings: () => void;
  openFileExplorer: () => void;
}): TaskbarItem[] => [
  {
    id: "start-menu",
    name: "Start Menu",
    icon: icons.AppWindow,
    iconSize: 26,
    iconColor: "white",
    iconStroke: "0ea5e9",
    type: "app",
    isPinned: true,
    isActive: false,
    action: openStartMenu,
  },
  {
    id: "file-explorer",
    name: "File Explorer",
    icon: icons.Folder,
    iconSize: 26,
    iconFill: "#0ea5e9",
    iconStroke: "0ea5e9",
    type: "app",
    isPinned: true,
    isActive: false,
    action: openFileExplorer,
  },
  {
    id: "notepad",
    name: "Notepad",
    icon: icons.Book,
    iconSize: 26,
    iconFill: "#0ea5e9",
    iconStroke: "",
    type: "app",
    isPinned: true,
    isActive: false,
    action: openNotepad,
  },
  {
    id: "settings",
    name: "Settings",
    icon: icons.Settings,
    iconSize: 26,
    iconFill: "#0ea5e9",
    type: "app",
    isPinned: true,
    isActive: false,
    action: openSettings,
  },
];

export const SYSTEM_FOLDERS = [
  {
    name: "Documents",
    icon: "📄",
    folders: {
      recordings: {
        files: ["RECORD1ING.TXT"],
      },
    },
  },
  {
    name: "Downloads",
    icon: "⬇️",
    folders: {
      recordings: {
        files: ["RECgRDING.TXT"],
      },
    },
  },
  {
    name: "Pictures",
    icon: "🖼️",
    folders: {
      recordings: {
        files: ["RECORDING.TXT"],
      },
    },
  },
  {
    name: "Music",
    icon: "🎵",
    folders: {
      recordings: {
        files: ["RECORDING.TXT"],
      },
    },
  },
  {
    name: "Videos",
    icon: "🎥",
    folders: {
      recordings: {
        files: ["RECORDING.TXT"],
      },
    },
  },
  {
    name: "Desktop",
    icon: "🖥️",
    folders: {
      recordings: {
        files: ["RECORDING.TXT"],
      },
    },
  },
];
