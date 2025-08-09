import { useAppStore } from "@/store/store";

export const useAppActions = () => {
  // TODO: refactor later
  // Actions 8.9.25
  const u = useAppStore();
  const openStartMenu = useAppStore((state) => state.toggleStartMenu);
  const openApp = useAppStore((state) => state.openApp);
  const closeApp = useAppStore((state) => state.closeApp);
  const pinToTaskbar = useAppStore((state) => state.pinToTaskbar);
  const unpinFromTaskbar = useAppStore((state) => state.unpinFromTaskbar);
  const pinToStartMenu = useAppStore((state) => state.pinToStartMenu);
  const unpinFromStartMenu = useAppStore((state) => state.unpinFromStartMenu);

  // Values
  const startMenuPins = useAppStore((state) => state.startMenuPins);
  const taskbarPins = useAppStore((state) => state.taskbarPins);
  const isStartOpen = useAppStore((state) => state.isStartOpen);
  const openApps = useAppStore((state) => state.openApps);

  return {
    openStartMenu,
    openApp,
    closeApp,
    pinToTaskbar,
    unpinFromTaskbar,
    pinToStartMenu,
    unpinFromStartMenu,

    startMenuPins,
    taskbarPins,
    isStartOpen,
    openApps,
  };
};
