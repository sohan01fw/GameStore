import React, {useState} from 'react';
import {IoMdCloseCircle} from "react-icons/io";

export default function Thumnail({onSelectThumbnail}: { onSelectThumbnail: (file: File) => void }) {
    const [thumbnailPic, setThumbnailPic] = useState<File[] | null>(null);

    const handleThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files as FileList;
        const getImage = Array.from(files);
        const selectedFile = getImage[0];
        setThumbnailPic(getImage);
        onSelectThumbnail(selectedFile); // Pass the selected file back to the parent component
    };

    const handleRemoveThumnail = (index: Number) => {
        const deleteImage = thumbnailPic?.filter((_, i) => i !== index);

        // @ts-ignore
        setThumbnailPic(deleteImage);
        // @ts-ignore
        onSelectThumbnail(deleteImage);

    }
    const RenderThumbnail = () => {
        if (!thumbnailPic) return null;
        return (
            <div className="image m-2 relative w-60">
                {thumbnailPic.length > 0 && thumbnailPic.map((image, index) => (
                    <div>
                        <img src={URL.createObjectURL(image)} alt="thumbnail_pic" className="rounded-lg"/>
                        <button
                            type="button"
                            className="remove-image-button   absolute z-20 right-0 top-0 hover:bg-gray-400 p-1 rounded-full"
                            onClick={() => handleRemoveThumnail(index)}
                        >
                            <IoMdCloseCircle fontSize="20px" className="text-black fill-white"/>
                        </button>
                    </div>
                ))}

            </div>
        );
    };

    return (
        <div className="p-2 gap-2 ">
            <label
                className="flex flex-col items-center justify-center w-80 h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent  ">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">

                    {thumbnailPic && thumbnailPic.length > 0 && (
                        <div className="file-count">
                            {thumbnailPic.length} file{thumbnailPic.length > 1 ? 's' : ''} selected
                        </div>
                    )}
                    <p className="mb-2 text-sm text-gray-300 dark:text-gray-400">
                        <span className="font-semibold">Click to upload Thumbnail</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                </div>
                <input accept='image/*' onChange={handleThumbnail} type="file" className='hidden'/>
            </label>
            <RenderThumbnail/>
        </div>
    );
}
