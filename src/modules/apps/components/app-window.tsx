"use client";

import { Button } from "@/components/ui/button";
import {
  INITIAL_WINDOW_HEIGHT,
  INITIAL_WINDOW_WIDTH,
  MIN_WINDOW_HEIGHT,
  MIN_WINDOW_WIDTH,
} from "@/constants";
import { useAppStore } from "@/store/store";
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
    width: INITIAL_WINDOW_WIDTH,
    height: INITIAL_WINDOW_HEIGHT,
  });
  const [resizing, setResizing] = useState(false);
  const [maximized, setMaximized] = useState(false);
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
      if (!windowRef.current) return;
      const rect = windowRef?.current?.getBoundingClientRect();

      // Calculate raw positions before clamping

      let newX = e.clientX - offset.x;
      let newY = e.clientY - offset.y;
      setPosition({
        x: Math.min(
          Math.max(0, newX), // prevent going past left
          window.innerWidth - rect.width // prevent going past right
        ),
        y: Math.min(
          Math.max(0, newY), // prevent going past top
          window.innerHeight - rect.height // prevent going past bottom
        ), // lboundaries
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
  const handleMaximize = () => {
    if (maximized) {
      setPosition({
        x: (innerWidth - INITIAL_WINDOW_WIDTH) / 2,
        y: (innerHeight - INITIAL_WINDOW_HEIGHT) / 2,
      });
      setDimensions({
        width: INITIAL_WINDOW_WIDTH,
        height: INITIAL_WINDOW_HEIGHT,
      });
      setMaximized(false);
    } else {
      setPosition({ x: 0, y: 0 });
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setMaximized(true);
    }
  };

  const handleMinimize = () => {
    if (!windowRef.current) return;
    setPosition({
      x: INITIAL_WINDOW_WIDTH + 500,
      y: INITIAL_WINDOW_HEIGHT + 500,
    });
  };
  return (
    <div
      ref={windowRef}
      className={`absolute ${backgroundColor} shadow-2xl rounded overflow-hidden flex flex-col`}
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
        className="absolute bottom-0 right-0 cursor-grab"
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
          <Button variant="ghost" size="sm" onClick={handleMinimize}>
            <Minimize2Icon size={2} />
          </Button>
          <Button variant="ghost" size="sm" onClick={handleMaximize}>
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
      <div className="flex-1 overflow-auto min-w-0">{children}</div>
    </div>
  );
};

export default AppWindow;
