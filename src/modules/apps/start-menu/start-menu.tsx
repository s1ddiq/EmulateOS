import { Button } from "@/components/ui/button";
import TaskbarSearchInput from "@/modules/taskbar/components/taskbar-search-input";
import React from "react";
import { AppComponentsMeta } from "../registry";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useAppActions } from "../hooks/use-app-actions";
// Placeholder pinned apps

const StartMenu = () => {
  const { openApp, unpinFromStartMenu, startMenuPins } = useAppActions();

  return (
    <div
      className={`absolute -bottom-26 left-1/2 -translate-x-1/2 w-full max-w-lg bg-zinc-800 h-full max-h-148 rounded border border-input/30 p-4 animate-pop-up -z-1`}
    >
      {/* Search Bar */}
      <TaskbarSearchInput className="bg-zinc-900" />

      <div className="py-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <p className="text-xs font-medium text-muted-foreground">
            Coming soon
          </p>
          <Button size="sm" variant="ghost" className="text-xs">
            All Apps &gt;
          </Button>
        </div>

        <div>
          {startMenuPins.map((appId) => {
            const meta = AppComponentsMeta[appId];
            return (
              <ContextMenu key={appId}>
                <Tooltip>
                  <ContextMenuTrigger asChild>
                    <TooltipTrigger
                      onClick={() => openApp(appId)}
                      className="p-2 rounded-md hover:bg-zinc-700 transition-colors"
                    >
                      <meta.icon size={meta.iconSize ?? 20} />
                    </TooltipTrigger>
                  </ContextMenuTrigger>
                  <TooltipContent>
                    <p>{meta.name}</p>
                  </TooltipContent>
                </Tooltip>

                <ContextMenuContent>
                  <ContextMenuItem onClick={() => openApp(appId)}>
                    Open
                  </ContextMenuItem>
                  <ContextMenuItem onClick={() => unpinFromStartMenu(appId)}>
                    Unpin from start menu
                  </ContextMenuItem>
                  <ContextMenuItem
                    onClick={() => alert(`Delete ${meta.name}`)}
                    className="text-red-500"
                  >
                    Delete
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            );
          })}
        </div>

        {/* Pinned Apps Grid */}
      </div>
    </div>
  );
};

export default StartMenu;
