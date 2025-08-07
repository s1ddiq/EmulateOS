import { SYSTEM_FOLDERS } from "@/constants";
import AppWindow from "../components/app-window";
import { useEffect, useState } from "react";
import FolderView from "../components/views/folder-view";
import { FolderIcon } from "lucide-react";

const FileExplorerApp = () => {
  const [activeSystemFolder, setActiveSystemFolder] = useState("downloads");
  const [selectedFolderData, setSelectedFolderData] = useState(
    SYSTEM_FOLDERS.find((f) => f.name.toLowerCase() === activeSystemFolder)
  );

  useEffect(() => {
    setSelectedFolderData(
      SYSTEM_FOLDERS.find((f) => f.name.toLowerCase() === activeSystemFolder)
    );
  }, [activeSystemFolder]);

  return (
    <AppWindow title="File-Explorer">
      <div className="h-full grid grid-cols-8 grid-rows-auto">
        <div className="border-r border-input/30 flex h-full flex-col text-xs p-2 gap-y-4 col-span-2">
          {SYSTEM_FOLDERS.map((folder) => (
            <div
              key={folder.name}
              className="cursor-pointer hover:bg-zinc-800/65 p-2"
              onClick={() => setActiveSystemFolder(folder.name.toLowerCase())}
            >
              <span className="inline mr-2">{folder.icon}</span>
              <p className="inline">{folder.name}</p>
            </div>
          ))}
        </div>
        <div className="col-span-6">
          {selectedFolderData && (
            <div
              key={selectedFolderData.name}
              className="flex flex-col gap-y-4"
              onClick={() =>
                setActiveSystemFolder(selectedFolderData.name.toLowerCase())
              }
            >
              {/* <span className="inline mr-2">{selectedFolderData.icon}</span> */}
              <div>
                <p className="inline text-xs text-muted-foreground px-2">
                  Explorer &gt; {selectedFolderData.name}
                </p>
              </div>
              <div>
                {Object.entries(selectedFolderData.folders).map(
                  ([folderName, folderData]) => (
                    <div
                      key={folderName}
                      className="w-fit flex flex-col justify-center items-center hover:bg-zinc-800/65"
                    >
                      <FolderIcon fill="white" size={48} />
                      <p>{folderName}</p>
                      {/* <p>{folderData.files}</p> */}
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </AppWindow>
  );
};

export default FileExplorerApp;

{
  /*
  let g = SYSTEM_FOLDERS.find(
    (f) => f.name.toLowerCase() === activeSystemFolder
  );
  console.log(g);

  console.log(activeSystemFolder);
  import { SYSTEM_FOLDERS } from "@/constants";
import AppWindow from "../components/app-window";
import { useState } from "react";
import FolderView from "../components/views/folder-view";

const FileExplorerApp = () => {
  const [activeSystemFolder, setActiveSystemFolder] = useState("downloads");
  const [selectedFolderData, setSelectedFolderData] = useState(
    SYSTEM_FOLDERS.find((f) => f.name.toLowerCase() === activeSystemFolder)
  );

  return (
    <AppWindow title="File-Explorer">
      <div className="h-full grid grid-cols-8 grid-rows-auto">
        <div className="border-r border-input/30 flex h-full flex-col text-xs p-2 gap-y-4 col-span-2">
          {selectedFolderData && (
            <div
              key={selectedFolderData.name}
              className=""
              onClick={() =>
                setActiveSystemFolder(selectedFolderData.name.toLowerCase())
              }
            >
              <span className="inline mr-2">{selectedFolderData.icon}</span>
              <p className="inline">{selectedFolderData.name}</p>
            </div>
          )}
        </div>
        <div className="col-span-6"></div>
      </div>
    </AppWindow>
  );
};

export default FileExplorerApp;

  
  */
}
