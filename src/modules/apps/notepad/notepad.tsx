"use client";
import { Textarea } from "@/components/ui/textarea";
import AppWindow from "../components/app-window";
import { useState } from "react";
import { Bold, Italic, MinusIcon, PlusIcon, Scale3D } from "lucide-react";
const NotepadApp = () => {
  const savedNotes = localStorage.getItem("saved-notes");
  const [notes, setNotes] = useState(savedNotes);
  const handleSaveNote = () => {
    console.log("hi");
    localStorage.setItem("saved-notes", `${notes}`);
  };

  const [textBold, setTextBold] = useState(true);
  return (
    <AppWindow title="Notepad" onClose={handleSaveNote}>
      <div>
        <div className="bg-zinc-800/50 flex p-2 items-center gap-2">
          <Bold
            className={`${textBold && "bg-white text-black"} size-3.5`}
            onClick={() => setTextBold((prev) => !prev)}
          />
          <p className="text-xs text-muted-foreground">more coming soon</p>
        </div>

        <div className="p-2">
          <Textarea
            placeholder="Write a note..."
            value={notes ?? 0}
            className={`${
              textBold && "font-semibold"
            } border-0 min-h-64 w-full focus-visible:ring-0 p-0`}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      </div>
    </AppWindow>
  );
};

export default NotepadApp;
