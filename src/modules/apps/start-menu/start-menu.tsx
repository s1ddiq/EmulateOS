import { Button } from "@/components/ui/button";
import TaskbarSearchInput from "@/modules/taskbar/components/taskbar-search-input";
import React from "react";

const StartMenu = () => {
  return (
    <div
      className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-full max-w-lg bg-zinc-800 h-full max-h-148 rounded border border-input/30 p-4 animate-pop-up scale-0`}
    >
      <TaskbarSearchInput className="bg-zinc-900" />

      <div className="py-4">
        <div className="flex justify-between">
          <p>Pinned</p>
          <Button size="sm">All Apps &gt;</Button>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default StartMenu;
