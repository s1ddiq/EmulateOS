import { create } from "zustand";

interface AppStore {
  isStartOpen: boolean;
  openApps: string[];
  toggleStartMenu: () => void;
  openApp: (id: string) => void;
  closeApp: (id: string) => void;
}

export const useAppStore = create<AppStore>((set, get) => ({
  isStartOpen: false,
  openApps: [],

  toggleStartMenu: () => set((state) => ({ isStartOpen: !state.isStartOpen })),
  openApp: (id) => {
    const { openApps } = get();
    if (!openApps.includes(id)) {
      set({ openApps: [...openApps, id] });
    }
  },

  closeApp: (id) => {
    set((state) => ({
      openApps: state.openApps.filter((appId) => appId !== id),
    }));
  },
}));
