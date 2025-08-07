"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

type Props = {
  fileName: string;
  fileExtension: string;
  fileContents: {
    text: string;
  };
  isOpen: any;
  setIsOpen: any;
};

const FileViewer = ({
  fileName,
  fileExtension,
  fileContents,
  isOpen,
  setIsOpen,
}: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-zinc-900 border border-zinc-700 rounded-md px-4 py-2 text-white max-w-lg">
        <DialogTitle></DialogTitle>
        <div className="space-y-4">
          <header className="border-b border-zinc-700 pb-2">
            <h2 className="text-lg font-semibold">{fileName}</h2>
            <p className="text-sm text-zinc-400">
              {fileExtension.toUpperCase()} file
            </p>
          </header>

          <section className="max-h-[300px] overflow-auto whitespace-pre-wrap text-sm leading-relaxed">
            {fileContents.text || "This file is currently empty."}
          </section>

          <footer className="pt-4 text-right text-xs text-zinc-500">
            Press <kbd className="bg-zinc-800 px-1 py-0.5 rounded">Esc</kbd> to
            close
          </footer>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FileViewer;
