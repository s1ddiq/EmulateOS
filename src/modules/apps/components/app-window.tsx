"use client";

import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/useAppStore";
import { Minimize2Icon, ExpandIcon, XIcon } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Props = {
  title?: string;
  backgroundColor?: string;
  onClose?: () => void;
  children: React.ReactNode;
};

const AppWindow = ({
  title = "Unnamed File",
  backgroundColor = "bg-zinc-900",
  onClose,
  children,
}: Props) => {
  const closeApp = useAppStore((state) => state.closeApp);
  const windowRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useLayoutEffect(() => {
    const el = windowRef.current;
    if (!el) return;

    const { offsetWidth, offsetHeight } = el;
    const { innerWidth, innerHeight } = window;
    const centerX = (innerWidth - offsetWidth) / 2;
    const centerY = (innerHeight - offsetHeight) / 2;
    setPosition({ x: centerX, y: centerY });
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = windowRef.current?.getBoundingClientRect();
    if (!rect) return;

    setDragging(true);
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    e.preventDefault();
  };

  useEffect(() => {
    if (!dragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, offset]);

  return (
    <div
      ref={windowRef}
      className={`absolute max-w-lg min-h-64 w-full ${backgroundColor} shadow-2xl rounded`}
      style={{ top: position.y, left: position.x }}
    >
      <div
        className="bg-zinc-800 rounded-t flex justify-between w-full pl-3 items-center cursor-pointer select-none"
        onMouseDown={handleMouseDown}
      >
        <p className="opacity-80 text-xs">{title}</p>
        <div className="flex gap-1">
          <Button variant="ghost" size="sm">
            <Minimize2Icon size={2} />
          </Button>
          <Button variant="ghost" size="sm">
            <ExpandIcon size={2} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              if (onClose) {
                onClose();
              }
              closeApp(title.toLowerCase());
            }}
          >
            <XIcon size={2} />
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AppWindow;
