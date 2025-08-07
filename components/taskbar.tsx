"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useClock } from "@/hooks/use-clock";
import Image from "next/image";
import TaskbarSearchInput from "@/modules/taskbar/components/taskbar-search-input";
import { TaskbarItem } from "@/lib/types";

type Props = {
  taskbarItems: TaskbarItem[];
};

const Taskbar = ({ taskbarItems }: Props) => {
  const { date, time } = useClock();
  return (
    <div className="w-full h-14 bg-zinc-900 border-t border-zinc-700 flex items-center px-4">
      <div className="w-1/6 h-full flex flex-col justify-center gap-y-1">
        <Image
          src="/emulate-os-logo.svg"
          width={32}
          height={32}
          alt="EmulateOS Logo"
        />
        <p className="text-muted-foreground text-xs">
          Running EmulateOS v1.0.0
        </p>
      </div>
      <div className="w-4/6 flex justify-center items-center gap-4 h-full">
        <TaskbarSearchInput />
        {taskbarItems.map((item) => (
          <div key={item.id}>
            <Tooltip>
              <TooltipTrigger onClick={item.action}>
                {/* <Image /> */}
                <item.icon
                  size={item.iconSize}
                  // stroke={item.iconStroke}
                  // color={item.iconColor}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </div>

      <div className="w-1/6 h-full text-sm flex flex-col justify-center items-end">
        <p>{time}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Taskbar;
