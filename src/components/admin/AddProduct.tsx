"use client";

import dynamic from "next/dynamic";
import VideoFile from "../ui/UploadInputFile/VideoFile";
import Thumnail from "../ui/UploadInputFile/Thumnail";

const ImageFile = dynamic(() => import("../ui/UploadInputFile/ImageFile"));
export default function AddProduct() {
  return (
    <form method="POST">
      <div className="pructname">
        <div className="form-control w-full max-w-xs">
          <div className="label">
            <h3 className="label-text font-semibold text-white ts-md">
              Product Name
            </h3>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-ghost w-full max-w-xs"
          />
        </div>
        <div className="flex">
          <div className="thumnail">
            <div className="label">
              <h3 className="label-text font-semibold text-white ts-md">
                Select Thumnail
              </h3>
            </div>
            <Thumnail />
          </div>
          <div className="videos">
            <div className="label">
              <h3>select product videos</h3>
            </div>
          </div>
          <VideoFile />
        </div>
      </div>

      <button className="btn btn-ghost" type="submit">
        Submit
      </button>
    </form>
  );
}
