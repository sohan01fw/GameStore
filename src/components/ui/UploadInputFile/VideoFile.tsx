import React, { useState } from "react";

const VideoFile = ({onselectproductvideo}:any) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (event: any) => {
    const files = event.target.files as FileList;
    if (files && files.length > 0) {
      const validImages: any = Array.from(files);
      setSelectedImages(validImages);
      onselectproductvideo(validImages)
    }
  };

  const renderPreviews = () => {
    if (!selectedImages.length) return null;
    return (
      <div className="">
        {selectedImages.map((image, index) => (
          <video
            muted
            controls
            autoPlay
            key={index}
            src={URL.createObjectURL(image)}
            className="w-60"
          />
        ))}
      </div>
    );
  };

  return (
    <div className="image-upload">
      <input
        multiple
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="file-input"
      />
      <div className="renderimage">{renderPreviews()}</div>
    </div>
  );
};

export default VideoFile;
