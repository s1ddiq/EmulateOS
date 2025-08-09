"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useClock } from "@/hooks/use-clock";
import Image from "next/image";
import TaskbarSearchInput from "@/modules/taskbar/components/taskbar-search-input";
import { useAppStore } from "@/store/store";
import { AppComponents, AppComponentsMeta } from "@/modules/apps/registry";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useAppActions } from "@/modules/apps/hooks/use-app-actions";
const Taskbar = () => {
  const { date, time } = useClock();
  const { openStartMenu, openApp, unpinFromTaskbar } = useAppActions();
  // Get pinned app IDs from store
  const taskbarPins = useAppStore((state) => state.taskbarPins);
  return (
    <div className="w-full h-14 bg-gradient-to-t from-zinc-900 to-zinc-800 border-t border-zinc-700 shadow-lg flex items-center px-4">
      {/* Left: Logo */}
      <div className="w-1/6 h-full flex items-center gap-3">
        {/* <Image
          src="/emulate-os-logo.svg"
          width={32}
          height={32}
          alt="EmulateOS Logo"
          className="rounded-md cursor-pointer"
          onClick={openStartMenu}
        /> */}
      </div>

      {/* Center: Search + Pinned Apps */}
      <div className="w-4/6 flex justify-center items-center gap-6 h-full">
        <Image
          src="/emulate-os-logo.svg"
          width={32}
          height={32}
          alt="EmulateOS Logo"
          className="rounded-md cursor-pointer"
          onClick={openStartMenu}
        />
        <TaskbarSearchInput className="w-64" />
        {taskbarPins.map((appId) => {
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
                <ContextMenuItem onClick={() => unpinFromTaskbar(appId)}>
                  Unpin from taskbar
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

      {/* Right: Clock */}
      <div className="w-1/6 h-full text-right flex flex-col justify-center items-end pr-2">
        <p className="text-base font-medium">{time}</p>
        <p className="text-base text-muted-foreground">{date}</p>
      </div>
    </div>
  );
};

export default Taskbar;

// const meta = AppComponentsMeta[appId]; // Get icon & name from registry
// if (!meta) return null;
// return (
//   <Tooltip key={appId}>
//     <TooltipTrigger
//       onClick={() => openApp(appId)}
//       className="p-2 rounded-md hover:bg-zinc-700 transition-colors"
//     >
//       <meta.icon size={meta.iconSize || 20} />
//     </TooltipTrigger>
//     <TooltipContent>
//       <p>{meta.name}</p>
//     </TooltipContent>
//   </Tooltip>
// );
