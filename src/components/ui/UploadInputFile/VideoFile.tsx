import React, { useState } from 'react';

const VideoFile = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (event:any) => {
    const files = event.target.files as FileList;
    if (files && files.length > 0) {
      const validImages:any = Array.from(files)
      setSelectedImages(validImages);
    }
  };

  const renderPreviews = () => {
    if (!selectedImages.length) return null;
    return (
      <div className="">
        {selectedImages.map((image, index) => (
          <iframe key={index} src={URL.createObjectURL(image)}  className = "" />
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
        className='file-input'
      />
      <div className="renderimage">
      {renderPreviews()}
      </div>
    </div>
  );
};

export default VideoFile;
