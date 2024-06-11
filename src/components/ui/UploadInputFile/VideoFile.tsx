import React, {useState} from "react";
import {IoMdCloseCircle} from "react-icons/io";


interface videoFileProps {
    onSelectProductVideo: (files: File[]) => void
}

const VideoFile = ({onSelectProductVideo}: videoFileProps) => {
    const [selectedVideos, setSelectedVideos] = useState<File[]>([]);

    const handleFileChange = (event: any) => {
        const files: FileList = event.target.files as FileList;
        if (files && files.length > 0) {
            const validImages: any = Array.from(files);
            setSelectedVideos(validImages);
            onSelectProductVideo(validImages)
        }
    };
    const handleRemoveVideo = (index: Number) => {
        let deleteVideo: File[] = selectedVideos.filter((_, i) => i != index)
        setSelectedVideos(deleteVideo);
        onSelectProductVideo(deleteVideo)

    }
    const renderPreviews = () => {
        if (!selectedVideos.length) return null;
        return (
            <div className="bborder flex h-60 gap-3 p-2">
                {selectedVideos.map((video, index) => (
                        <div className="relative ">
                            <video
                                muted
                                controls
                                autoPlay
                                key={index}
                                src={URL.createObjectURL(video)}
                                className="w-80"
                            />
                            <button
                                type="button"
                                className=" bborder absolute z-20 right-0 top-0  hover:bg-gray-400 p-1 rounded-full "
                                onClick={() => handleRemoveVideo(index)}
                            >
                                <IoMdCloseCircle fontSize="20px" className="text-black fill-white"/>
                            </button>
                        </div>

                    )
                )}

            </div>
        )
            ;
    };

    return (
        <div className="video-upload flex">
            <label
                className="flex flex-col items-center justify-center w-80 h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent"
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
                    {selectedVideos.length > 0 && (
                        <div className="file-count">
                            {selectedVideos.length} file{selectedVideos.length > 1 ? 's' : ''} selected
                        </div>
                    )}
                    <p className="mb-2 text-sm text-gray-300 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        MP4, AVI, MOV or MKV (MAX. 1920x1080px, 60fps)
                    </p>
                </div>
                <input
                    multiple
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </label>


            <div className="flex">
                <div className="renderimage">
                    {renderPreviews()}
                </div>
            </div>
        </div>
    );
};

export default VideoFile;
