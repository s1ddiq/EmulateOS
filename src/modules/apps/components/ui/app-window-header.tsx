"use client";
import { Button } from "@/components/ui/button";
import { ExpandIcon, Minimize2Icon, XIcon } from "lucide-react";
import React, { useEffect } from "react";

const AppWindowHeader = () => {
  return (
    <div
      className="bg-zinc-800 flex justify-between w-full p-2 draggable"
      draggable="true"
    >
      <p className="opacity-80">App - Window</p>
      <div>
        <Button variant="ghost" size="sm" className="hover:bg-conic-0">
          <Minimize2Icon />
        </Button>
        <Button variant="ghost" size="sm" className="hover:bg-conic-0">
          <ExpandIcon />
        </Button>
        <Button variant="ghost" size="sm" className="hover:bg-conic-0">
          <XIcon />
        </Button>
      </div>
    </div>
  );
};

export default AppWindowHeader;
