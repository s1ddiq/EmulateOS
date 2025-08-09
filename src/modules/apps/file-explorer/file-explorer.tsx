"use client";
import { SYSTEM_FOLDERS } from "@/constants";
import AppWindow from "../components/app-window";
import { useEffect, useState } from "react";
import { FolderIcon, PlusIcon } from "lucide-react";
import { FolderData, File } from "@/lib/types";
import FileViewer from "../components/file-viewer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const FileExplorerApp = () => {
  const [isFileViewerOpen, setIsFileViewerOpen] = useState(false);
  const [createFileModalOpen, setCreateFileModalOpen] = useState(true);
  const [fileName, setFileName] = useState("");
  const [fileExtension, setFileExtension] = useState("");
  const [fileContents, setFileContents] = useState<object>();

  const [currentCategory, setCurrentCategory] = useState(
    SYSTEM_FOLDERS[0].name.toLowerCase()
  );
  const [openedSubfolder, setOpenedSubfolder] = useState("");
  const [currentCategoryData, setCurrentCategoryData] = useState<
    FolderData | undefined
  >();
  const [openedFiles, setOpenedFiles] = useState<File[]>([]);

  useEffect(() => {
    const rawData = SYSTEM_FOLDERS.find(
      (f) => f.name.toLowerCase() === currentCategory
    );
    const data = rawData && {
      ...rawData,
      folders: Object.fromEntries(
        Object.entries(rawData.folders).filter(
          ([, value]) => value !== undefined
        )
      ),
    };
    setCurrentCategoryData(data);
    setOpenedSubfolder("");
    setOpenedFiles([]);
  }, [currentCategory]);

  useEffect(() => {
    if (currentCategoryData && openedSubfolder) {
      const subfolderFiles =
        currentCategoryData.folders[openedSubfolder]?.files || [];
      setOpenedFiles(subfolderFiles);
    } else {
      setOpenedFiles([]);
    }
  }, [openedSubfolder, currentCategoryData]);

  // const handleCreateFile = () => {
  //   const folderToPushTo = SYSTEM_FOLDERS.find((f) => f.name === currentCategory);
  //   folderToPushTo?.folders.push({})
  // };

  return (
    <AppWindow title="File-Explorer">
      <div className="h-full w-full grid grid-cols-[180px_1fr] overflow-hidden">
        {/* Sidebar */}
        <div className="border-r border-input/30 flex flex-col text-xs p-1 gap-y-2 overflow-y-auto">
          <div className="space-y-2">
            {SYSTEM_FOLDERS.map((folder) => (
              <div
                key={folder.name}
                className={`cursor-pointer hover:bg-zinc-800/65 rounded px-2 py-1 flex h-8 items-center ${
                  currentCategory === folder.name.toLowerCase()
                    ? "bg-zinc-800/70"
                    : ""
                }`}
                onClick={() => setCurrentCategory(folder.name.toLowerCase())}
              >
                <folder.icon size={16} />
                <span className="inline ml-2">{folder.name}</span>
              </div>
            ))}
          </div>
          {/* <Button
            variant="secondary"
            onClick={() => setCreateFileModalOpen(true)}
          >
            Create File <PlusIcon className="ml-1" size={14} />
          </Button> */}
        </div>

        {/* Main Content */}
        <div
          className="p-3 overflow-y-scroll overflow-x-hidden flex flex-col gap-y-4 [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-zinc-900
          [&::-webkit-scrollbar-thumb]:bg-zinc-800"
        >
          {currentCategoryData && (
            <>
              <div>
                <p className="text-xs text-muted-foreground px-2">
                  Explorer &gt; {currentCategoryData.name}
                  {openedSubfolder && ` > ${openedSubfolder}`}
                </p>
              </div>

              {/* Subfolders */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-full">
                {Object.entries(currentCategoryData.folders).map(
                  ([subfolderName]) => (
                    <div
                      key={subfolderName}
                      className="flex flex-col items-center justify-center hover:bg-zinc-800/65 rounded p-2 cursor-pointer"
                      onClick={() => setOpenedSubfolder(subfolderName)}
                    >
                      <FolderIcon fill="white" size={48} />
                      <p className="text-xs text-center mt-1">
                        {subfolderName}
                      </p>
                    </div>
                  )
                )}
              </div>

              {/* Files */}
              {openedFiles.length > 0 && (
                <div className="mt-4 border-zinc-700 pt-3">
                  <p className="text-sm mb-2 text-muted-foreground">
                    {openedSubfolder}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs ">
                    {openedFiles.map((file, idx) => (
                      <div key={idx} className="col-span-full">
                        <div
                          className="border border-zinc-700 p-2 rounded hover:bg-zinc-800/60 cursor-pointer"
                          onClick={() => setIsFileViewerOpen(true)}
                        >
                          📄 {file.fileName}
                        </div>
                        {isFileViewerOpen && (
                          <FileViewer
                            fileName={file.fileName}
                            fileExtension={file.fileExtension}
                            fileContents={file.fileContents}
                            setIsOpen={setIsFileViewerOpen}
                            isOpen={isFileViewerOpen}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </AppWindow>
  );
};

export default FileExplorerApp;
