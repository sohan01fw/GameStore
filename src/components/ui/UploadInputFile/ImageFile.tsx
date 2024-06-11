import React, {useState, useRef} from 'react';
import InputFileImage from "@/components/ui/UploadInputFile/InputFileImage";
import {IoMdCloseCircle} from "react-icons/io";
import {IoClose} from "react-icons/io5";

interface ImageFileProps {
    onSelectProductPic: (files: File[]) => void;
}

const ImageFile: React.FC<ImageFileProps> = ({onSelectProductPic}: ImageFileProps) => {
    const [selectedImages, setSelectedImages] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const files: FileList = event.target.files as FileList;
        if (files && files.length > 0) {
            const validImages: File[] = Array.from(files);
            setSelectedImages(validImages);
            onSelectProductPic(validImages)
        }
    };

    // Remove image from the list of images
    const handleRemoveImage = (index: number): void => {
        const updatedImages = selectedImages.filter((_, i) => i !== index);
        setSelectedImages(updatedImages);
        onSelectProductPic(updatedImages);
    };

    const renderPreviews = () => {
        if (!selectedImages.length) return null;
        return (
            <div className="image-preview flex p-3 gap-3 flex-wrap ">
                {selectedImages.map((image, index) => (
                    <div key={index} className="image-container relative">
                        <img src={URL.createObjectURL(image)} alt="Selected"
                             className="image-preview-thumbnail  rounded-lg"/>
                        <button
                            type="button"
                            className="remove-image-button   absolute z-20 right-0 top-0 hover:bg-gray-400 p-1 rounded-full"
                            onClick={() => handleRemoveImage(index)}
                        >
                            <IoMdCloseCircle fontSize="20px" className="text-black fill-white"/>
                        </button>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="image-upload flex">
            <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-80 h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent  "
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                        aria-hidden="true"
                        className="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                    </svg>
                    {selectedImages.length > 0 && (
                        <div className="file-count">
                            {selectedImages.length} file{selectedImages.length > 1 ? 's' : ''} selected
                        </div>
                    )}
                    <p className="mb-2 text-sm text-gray-300 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                </div>
                <input
                    id="dropzone-file"
                    multiple
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className='hidden'
                />
            </label>
            <div className=" flex">
                <div className="renderimage">
                    {renderPreviews()}
                </div>
            </div>
        </div>
    );
};

export default ImageFile;
