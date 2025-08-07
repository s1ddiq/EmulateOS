import { Folder } from "@/lib/types";
import React from "react";

type Props = {
  folderName: string;
  folderData: Folder;
};
const FolderView = ({ folderName, folderData }: Props) => {
  return (
    <div className="ml-4 mt-2">
      <div className="font-semibold">📁 {folderName}</div>

      {folderData.files.map((file, idx) => (
        <div key={idx} className="ml-4">
          🗒️{file}
        </div>
      ))}

      {folderData.folders &&
        Object.entries(folderData.folders).map(
          ([subFolderName, subFolderData]) => (
            <FolderView
              key={subFolderName}
              folderName={subFolderName}
              folderData={subFolderData}
            />
          )
        )}
    </div>
  );
};

export default FolderView;
