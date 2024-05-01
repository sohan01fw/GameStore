import React, { useState } from 'react';

const ImageFile = ({onselectproductpic}:any) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (event:any) => {
    const files = event.target.files as FileList;
    if (files && files.length > 0) {
      const validImages:any = Array.from(files)
      setSelectedImages(validImages);
      onselectproductpic(validImages)
    }
  };

  const renderPreviews = () => {
    if (!selectedImages.length) return null;
    return (
      <div className="">
        {selectedImages.map((image, index) => (
          <img key={index} src={URL.createObjectURL(image)} alt="image" className = "rounded-full w-40" />
        ))}
      </div>
    );
  };

  return (
    <div className="image-upload">
      <input
        multiple
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className='file-input'
      />
      <div className="renderimage">
      {renderPreviews()}
      </div>
    </div>
  );
};

export default ImageFile;
