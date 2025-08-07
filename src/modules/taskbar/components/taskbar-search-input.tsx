"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const TaskbarSearchInput = ({ className }: { className: string }) => {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 rotate-90" />
      <Input placeholder="Search" className={`pl-10 ${className}`} />
    </div>
  );
};

export default TaskbarSearchInput;
