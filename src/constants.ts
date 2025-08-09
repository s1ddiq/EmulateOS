import { icons } from "lucide-react";
import { FolderData, TaskbarItem } from "./lib/types";
// This file allows us to change any app icon or name!
// so this is awesome!

// This returns the array instead of exporting it directly
export const createAppItems = ({
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
    icon: icons.FileText,
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

// export const SYSTEM_FOLDERS: FolderData[] = [
//   {
//     name: "Documents",
//     icon: "📄",
//     folders: {
//       Projects: {
//         files: [
//           {
//             fileName: "project_plan.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//           {
//             fileName: "roadmap.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//           {
//             fileName: "todo.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//         ],
//       },
//       Notes: {
//         files: [
//           {
//             fileName: "meeting_notes.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//         ],
//       },
//     },
//   },
//   {
//     name: "Downloads",
//     icon: "⬇️",
//     folders: {
//       Contracts: {
//         files: [
//           {
//             fileName: "nda.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//           {
//             fileName: "employment_agreement.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//         ],
//       },
//       Readmes: {
//         files: [
//           {
//             fileName: "README.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//           {
//             fileName: "INSTRUCTIONS.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//         ],
//       },
//     },
//   },
//   {
//     name: "Pictures",
//     icon: "🖼️",
//     folders: {
//       Sketches: {
//         files: [
//           {
//             fileName: "sketch_notes.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//           {
//             fileName: "description.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//         ],
//       },
//       Prompts: {
//         files: [
//           {
//             fileName: "reference_notes.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//         ],
//       },
//     },
//   },
//   {
//     name: "Music",
//     icon: "🎵",
//     folders: {
//       Lyrics: {
//         files: [
//           {
//             fileName: "song1_lyrics.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//           {
//             fileName: "song2_lyrics.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//         ],
//       },
//       Notes: {
//         files: [
//           {
//             fileName: "music_theory_notes.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//         ],
//       },
//     },
//   },
//   {
//     name: "Videos",
//     icon: "🎥",
//     folders: {
//       Scripts: {
//         files: [
//           {
//             fileName: "scene1_script.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//           {
//             fileName: "ending_script.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//         ],
//       },
//       Notes: {
//         files: [
//           {
//             fileName: "video_notes.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//         ],
//       },
//     },
//   },
//   {
//     name: "Desktop",
//     icon: "🖥️",
//     folders: {
//       Shortcuts: {
//         files: [
//           {
//             fileName: "shortcut_list.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//         ],
//       },
//       Logs: {
//         files: [
//           {
//             fileName: "desktop_log.txt",
//             fileExtension: "txt",
//             fileContents: { text: "YES HELLO!a" },
//           },
//         ],
//       },
//     },
//   },
// ];
export const SYSTEM_FOLDERS: FolderData[] = [
  {
    name: "Documents",
    icon: icons.File,
    folders: {
      Projects: {
        files: [
          {
            fileName: "project_plan.txt",
            fileExtension: "txt",
            fileContents: {
              text: "This project is built using Next.js 14, App Router, and TailwindCSS. It uses Zustand for state management and Clerk for authentication. Each file and folder is stored in a nested JSON structure that mimics a real file system.",
            },
          },
          {
            fileName: "roadmap.txt",
            fileExtension: "txt",
            fileContents: {
              text: "✅ Implement Folder Navigation\n✅ Add File Viewer Modal\n🟡 Improve Drag/Drop Support\n🔴 Add File Upload System\n🟢 Optimize Performance for Mobile",
            },
          },
          {
            fileName: "todo.txt",
            fileExtension: "txt",
            fileContents: {
              text: "- Add JSON file export\n- Add keyboard shortcuts\n- Improve animations\n- Build icon picker",
            },
          },
        ],
      },
      Notes: {
        files: [
          {
            fileName: "meeting_notes.txt",
            fileExtension: "txt",
            fileContents: {
              text: "Discussed component architecture, emphasized reusability, suggested creating a folder context provider to centralize logic.",
            },
          },
        ],
      },
    },
  },
  {
    name: "Downloads",
    icon: icons.Download,
    folders: {
      Contracts: {
        files: [
          {
            fileName: "nda.txt",
            fileExtension: "txt",
            fileContents: {
              text: "This Non-Disclosure Agreement (NDA) protects confidential information related to this Next.js project.",
            },
          },
          {
            fileName: "employment_agreement.txt",
            fileExtension: "txt",
            fileContents: {
              text: "This agreement outlines the terms for a frontend engineer working with React, TailwindCSS, Supabase, and Clerk.",
            },
          },
        ],
      },
      Readmes: {
        files: [
          {
            fileName: "README.txt",
            fileExtension: "txt",
            fileContents: {
              text: "Welcome to the EmulateOS file system. This app simulates a basic operating system using React and Next.js.",
            },
          },
          {
            fileName: "INSTRUCTIONS.txt",
            fileExtension: "txt",
            fileContents: {
              text: "Navigate the file explorer, click on a file to open a dialog viewer, and use the folder list on the left to switch directories.",
            },
          },
        ],
      },
    },
  },
  {
    name: "Pictures",
    icon: icons.FileImage,
    folders: {
      Sketches: {
        files: [
          {
            fileName: "sketch_notes.txt",
            fileExtension: "txt",
            fileContents: {
              text: "All icons are represented with emoji for quick visual recognition. Icons can later be replaced with SVGs for theme customization.",
            },
          },
          {
            fileName: "description.txt",
            fileExtension: "txt",
            fileContents: {
              text: "This folder contains conceptual design notes for EmulateOS UI, such as window layout and docking behavior.",
            },
          },
        ],
      },
      Prompts: {
        files: [
          {
            fileName: "reference_notes.txt",
            fileExtension: "txt",
            fileContents: {
              text: "Prompt: 'Build a file system interface in React that feels like Windows XP but modern and fast.'",
            },
          },
        ],
      },
    },
  },
  {
    name: "Music",
    icon: icons.Music,
    folders: {
      Lyrics: {
        files: [
          {
            fileName: "song1_lyrics.txt",
            fileExtension: "txt",
            fileContents: {
              text: "🎶 Just like code, we write in lines,\nFunctions nested, bugs in time.\nCompile the rhythm, run the beat,\nDeploy the soul and never cheat.",
            },
          },
          {
            fileName: "song2_lyrics.txt",
            fileExtension: "txt",
            fileContents: {
              text: "🎵 Next.js flows through my veins,\nRouting dynamic, never plain.\nTailwind breeze in every class,\nI write my styles and watch them pass.",
            },
          },
        ],
      },
      Notes: {
        files: [
          {
            fileName: "music_theory_notes.txt",
            fileExtension: "txt",
            fileContents: {
              text: "Frontend devs and musicians share rhythm — code has structure, patterns, and harmony, just like melodies.",
            },
          },
        ],
      },
    },
  },
  {
    name: "Videos",
    icon: icons.Clapperboard,
    folders: {
      Scripts: {
        files: [
          {
            fileName: "scene1_script.txt",
            fileExtension: "txt",
            fileContents: {
              text: "Scene 1: User opens EmulateOS, clicks a folder, dialog pops up. Background fades. Sound of typing. Zoom into file viewer.",
            },
          },
          {
            fileName: "scene2_script.txt",
            fileExtension: "txt",
            fileContents: {
              text: "Scene 3: User opens EmulateOS, clicks a folder, dialog pops up. Background fades. Sound of typing. Zoom into file viewer.",
            },
          },
          {
            fileName: "scene4_script.txt",
            fileExtension: "txt",
            fileContents: {
              text: "Scene 1: User opens EmulateOS, clicks a folder, dialog pops up. Background fades. Sound of typing. Zoom into file viewer.",
            },
          },
          {
            fileName: "ending_script.txt",
            fileExtension: "txt",
            fileContents: {
              text: "Final shot: User creates a new file, types inside, smiles. Fade out with the sound of a booting down system.",
            },
          },
        ],
      },
      Notes: {
        files: [
          {
            fileName: "video_notes.txt",
            fileExtension: "txt",
            fileContents: {
              text: "Video tutorial should highlight file creation, viewing, and folder navigation. Show how Zustand and Next.js connect logic to UI.",
            },
          },
        ],
      },
    },
  },
  {
    name: "Desktop",
    icon: icons.Monitor,
    folders: {
      Shortcuts: {
        files: [
          {
            fileName: "shortcut_list.txt",
            fileExtension: "txt",
            fileContents: {
              text: "[Ctrl + N] New File\n[Ctrl + F] Find File\n[Enter] Open\n[Esc] Close Dialog",
            },
          },
        ],
      },
      Logs: {
        files: [
          {
            fileName: "desktop_log.txt",
            fileExtension: "txt",
            fileContents: {
              text: "[08/07/2025] Booted EmulateOS\n[08/07/2025] Opened Documents > Projects > project_plan.txt\n[08/07/2025] Created new note in Notes folder.",
            },
          },
        ],
      },
    },
  },
];

export const MIN_WINDOW_WIDTH = 512;
export const MIN_WINDOW_HEIGHT = 320;
export const INITIAL_WINDOW_WIDTH = 700;
export const INITIAL_WINDOW_HEIGHT = 400;
