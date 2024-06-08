import React, { useState } from 'react';

interface ImageFileProps {
    onSelectProductPic: (files: File[]) => void;
}

const ImageFile: React.FC<ImageFileProps> = ({ onSelectProductPic}:ImageFileProps) => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    const files:FileList = event.target.files as FileList;
    if (files && files.length > 0) {
      const validImages:File[] = Array.from(files);
      setSelectedImages(validImages);
      onSelectProductPic(validImages);
    }
  };

  const renderPreviews = () => {
    if (!selectedImages.length) return null;
    return (
        <div className="">
          {selectedImages.map((image, index) => (
              <img key={index} src={URL.createObjectURL(image)} alt="image" className="rounded-full w-40" />
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
