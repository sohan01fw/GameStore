import React, { useState } from 'react';

export default function Thumnail({ onSelectThumbnail }: { onSelectThumbnail: (file: File) => void }) {
  const [thumbnailPic, setThumbnailPic] = useState<File | null>(null);

  const handleThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;
    const getImage = Array.from(files);
    const selectedFile = getImage[0];
    setThumbnailPic(selectedFile);
    onSelectThumbnail(selectedFile); // Pass the selected file back to the parent component
  };

  const RenderThumbnail = () => {
    if (!thumbnailPic) return null;
    return (
      <div className="image">
        <img src={URL.createObjectURL(thumbnailPic)} alt="thumbnail_pic" />
      </div>
    );
  };

  return (
    <div>
      <input accept='image/*' onChange={handleThumbnail} type="file" className='file-input w-full max-w-sm' />
      <RenderThumbnail />
    </div>
  );
}
