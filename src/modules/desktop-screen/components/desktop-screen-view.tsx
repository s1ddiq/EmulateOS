"use client";
import React from "react";
import { TaskbarItem } from "@/lib/types";
import { createTaskbarItems } from "@/constants";
import Taskbar from "../../../../components/taskbar";
import { AppComponents } from "@/modules/apps/registry";
import { useAppStore } from "@/store/useAppStore";

const DesktopScreenView = () => {
  const openApps = useAppStore((state) => state.openApps);
  const isStartOpen = useAppStore((state) => state.isStartOpen);

  const openStartMenu = useAppStore((state) => state.toggleStartMenu);
  const openApp = useAppStore((state) => state.openApp);

  const openNotepad = () => openApp("notepad");
  const openSettings = () => openApp("settings");
  const openFileExplorer = () => openApp("file-explorer");

  const TaskbarItems: TaskbarItem[] = createTaskbarItems({
    openStartMenu,
    openNotepad,
    openSettings,
    openFileExplorer,
  });

  console.log(openApps);
  return (
    <div className="flex flex-col max-h-screen min-h-screen bg-black text-white">
      {/* Content Area */}
      <div className="flex-1 relative text-white">
        <div className="bg-[url(/images/grain.png)] h-full w-full absolute opacity-75"></div>
        <div className="text-white"></div>
        {isStartOpen && (
          <div className="bg-white">
            <p>hi</p>
          </div>
        )}

        {openApps.map((app) => {
          const AppComponent = AppComponents[app];
          if (!AppComponent) return null;
          return (
            <div key={app}>
              <AppComponent />
            </div>
          );
        })}
      </div>

      {/* Taskbar stays at the bottom */}
      <Taskbar taskbarItems={TaskbarItems} />
    </div>
  );
};

export default DesktopScreenView;
