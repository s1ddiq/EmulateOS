import FileExplorerApp from "./file-explorer/file-explorer";
import NotepadApp from "./notepad/notepad";
import Notepad from "./notepad/notepad";
import SettingsApp from "./settings/settings";

export const AppComponents: Record<string, React.FC> = {
  notepad: NotepadApp,
  settings: SettingsApp,
  "file-explorer": FileExplorerApp,
};
