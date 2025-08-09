import { create } from "zustand";

interface AppStore {
  isStartOpen: boolean;
  openApps: string[];
  minimizedApps: string[];
  taskbarPins: string[];
  startMenuPins: string[];
  toggleStartMenu: () => void;
  openApp: (id: string) => void;
  closeApp: (id: string) => void;
  pinToTaskbar: (id: string) => void;
  pinToStartMenu: (id: string) => void;
  unpinFromTaskbar: (id: string) => void;
  unpinFromStartMenu: (id: string) => void;
  minimizeApp: (id: string) => void;
  restoreApp: (id: string) => void;
}

export const useAppStore = create<AppStore>((set, get) => ({
  isStartOpen: false,
  openApps: [],
  minimizedApps: [],
  taskbarPins: ["file-explorer", "notepad", "settings"],
  startMenuPins: ["file-explorer", "notepad", "settings"],

  toggleStartMenu: () => set((state) => ({ isStartOpen: !state.isStartOpen })),
  openApp: (id) => {
    const { openApps } = get();
    if (!openApps.includes(id)) {
      set({ openApps: [...openApps, id], isStartOpen: false });
    } else set({ isStartOpen: false });
  },
  minimizeApp: (id) => {
    const { minimizedApps } = get();
    if (!minimizedApps.includes(id)) {
      set({ minimizedApps: [...minimizedApps, id] });
    }
  },

  restoreApp: (id) => {
    set((state) => ({
      minimizedApps: state.minimizedApps.filter((appId) => appId !== id),
    }));
  },

  closeApp: (id) => {
    set((state) => ({
      openApps: state.openApps.filter((appId) => appId !== id),
    }));
  },

  pinToTaskbar: (id) => {
    const { taskbarPins } = get();
    if (!taskbarPins.includes(id)) {
      set({ taskbarPins: [...taskbarPins, id] });
    }
  },

  pinToStartMenu: (id) => {
    const { startMenuPins } = get();
    if (!startMenuPins.includes(id)) {
      set({ startMenuPins: [...startMenuPins, id] });
    }
  },

  unpinFromStartMenu: (id) => {
    set((state) => ({
      startMenuPins: state.startMenuPins.filter((appId) => appId !== id),
    }));
  },
  unpinFromTaskbar: (id) => {
    set((state) => ({
      taskbarPins: state.taskbarPins.filter((appId) => appId !== id),
    }));
  },
}));
