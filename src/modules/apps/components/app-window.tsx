"use client";

import { Button } from "@/components/ui/button";
import { MIN_WINDOW_HEIGHT, MIN_WINDOW_WIDTH } from "@/constants";
import { useAppStore } from "@/store/useAppStore";
import { Minimize2Icon, ExpandIcon, XIcon, Expand } from "lucide-react";
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
  const [dimensions, setDimensions] = useState({
    width: 512,
    height: 320,
  });
  const [resizing, setResizing] = useState(false);

  useLayoutEffect(() => {
    const el = windowRef.current;
    if (!el) return;

    const { offsetWidth, offsetHeight } = el;
    const { innerWidth, innerHeight } = window;
    const centerX = (innerWidth - offsetWidth) / 2;
    const centerY = (innerHeight - offsetHeight) / 2;
    setPosition({ x: centerX, y: centerY });
  }, []);

  const startResize = (e: React.MouseEvent) => {
    e.preventDefault();
    setResizing(true);

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = dimensions.width;
    const startHeight = dimensions.height;

    const onMouseMove = (e: MouseEvent) => {
      const newWidth = startWidth + (e.clientX - startX);
      const newHeight = startHeight + (e.clientY - startY);
      setDimensions({
        width: Math.max(newWidth, 100),
        height: Math.max(newHeight, 100),
      });
    };

    const onMouseUp = () => {
      setResizing(false);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };
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
      className={`h-fit absolute ${backgroundColor} shadow-2xl rounded overflow-hidden flex-1`}
      style={{
        top: position.y,
        left: position.x,
        width: dimensions.width,
        height: dimensions.height,
        minWidth: MIN_WINDOW_WIDTH,
        minHeight: MIN_WINDOW_HEIGHT,
      }}
    >
      <div
        className="absolute bottom-0 right-0 cursor-help"
        onMouseDown={startResize}
      >
        <ExpandIcon size={16} />
      </div>
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
