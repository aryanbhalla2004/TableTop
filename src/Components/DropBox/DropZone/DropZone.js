import React from "react";
import { useDropzone } from "react-dropzone";
import * as FaIcons from "react-icons/fa";
import "../DropBox.css";

function DropZone({ onDrop, accept, open }) {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept,
      onDrop,
    });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input className="input-zone" {...getInputProps()} />
        <div className="dropzone-text-center">
          {isDragActive ? (
            <p className="dropzone-content">
              Release to drop the files here
            </p>
          ) : (
            <p className="dropzone-content">
              Drag and drop your files here or
            </p>
          )}
          <button className="upload-file-button" type="button" onClick={open}>
            <FaIcons.FaFileUpload className="upload-icon"/>
            <span> Upload Files</span>
          </button>
        </div>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}

export default DropZone;