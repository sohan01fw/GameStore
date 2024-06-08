import React, { useState } from "react";


interface videoFileProps{
  onSelectProductVideo: (files: File[]) => void
}
const VideoFile = ({onSelectProductVideo}:videoFileProps) => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleFileChange = (event: any) => {
    const files:FileList = event.target.files as FileList;
    if (files && files.length > 0) {
      const validImages: any = Array.from(files);
      setSelectedImages(validImages);
      onSelectProductVideo(validImages)
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
