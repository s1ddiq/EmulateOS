import { Folder, Notebook, Settings } from "lucide-react"; // example icons
import FileExplorerApp from "./file-explorer/file-explorer";
import NotepadApp from "./notepad/notepad";
import SettingsApp from "./settings/settings";

// When actually rendering open apps
export const AppComponents: Record<string, React.FC> = {
  notepad: NotepadApp,
  settings: SettingsApp,
  "file-explorer": FileExplorerApp,
};

// For metadata like name & icon
export const AppComponentsMeta: Record<
  string,
  { name: string; icon: React.FC<{ size?: number }>; iconSize?: number }
> = {
  notepad: { name: "Notepad", icon: Notebook, iconSize: 20 },
  settings: { name: "Settings", icon: Settings, iconSize: 20 },
  "file-explorer": { name: "File Explorer", icon: Folder, iconSize: 20 },
};
