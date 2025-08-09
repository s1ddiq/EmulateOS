"use client";
import React from "react";
import Taskbar from "../../../../components/taskbar";
import { AppComponents } from "@/modules/apps/registry";
import StartMenu from "@/modules/apps/start-menu/start-menu";
import { useAppActions } from "@/modules/apps/hooks/use-app-actions";

const DesktopScreenView = () => {
  const { openApps, isStartOpen, openApp } = useAppActions();
  return (
    <div className="flex flex-col max-h-screen min-h-screen bg-black text-white">
      {/* Content Area */}
      <div className="flex-1 relative text-white">
        <div className="bg-[url(/images/grain.png)] h-full w-full absolute opacity-75"></div>
        <div className="text-white"></div>
        {isStartOpen && <StartMenu />}
        {openApps.map((app) => {
          const AppComponent = AppComponents[app];
          return (
            <div key={app}>
              <AppComponent />
            </div>
          );
        })}
      </div>

      {/* Taskbar stays at the bottom */}
      <Taskbar />
    </div>
  );
};

export default DesktopScreenView;
