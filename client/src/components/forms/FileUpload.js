import React from "react";

const FileUpload = () => {
  const fileUploadAndResize = (e) => {
    // resize, send back to server to upload to cloudinary
    // set url to image[] in the parent component - ProductCreate
    
  };
  return (
    <div className="row">
      <label className="btn btn-primary btn-raised">
        Choose File
        <input
          type="file"
          multiple
          hidden
          accept="images/*"
          onChange={fileUploadAndResize}
        />
      </label>
    </div>
  );
};

export default FileUpload;
