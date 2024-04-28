import React, { useState } from 'react';

const ImageFile = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (event:any) => {
    const files:any = event.target.files;
    if (files && files.length > 0) {
      const validImages:any = Array.from(files).filter((file:any) => /\.(jpg|jpeg|png|gif)$/.test(file.type));
      setSelectedImages(validImages);
    }
  };

  const renderPreviews = () => {
    if (!selectedImages.length) return null;
    console.log(selectedImages)
    return (
      <div className="image-previews">
        {selectedImages.map((image, index) => (
          
          <img key={index} src={URL.createObjectURL(image)} alt={`Preview ${index + 1}`} />
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
      />
     
      {renderPreviews()}
    </div>
  );
};

export default ImageFile;
