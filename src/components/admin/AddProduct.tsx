"use client";

import dynamic from "next/dynamic";

const Thumnail = dynamic(() => import("../ui/UploadInputFile/Thumnail"));
const ImageFile = dynamic(() => import("../ui/UploadInputFile/ImageFile"));
const VideoFile = dynamic(() => import("../ui/UploadInputFile/VideoFile"));
import { FaDollarSign } from "@/lib/Icons";
import { useState } from "react";
import axios from "axios";
import { addProducts } from "@/utils/Actions/Products.Action";

export default function AddProduct() {
  const [product_name, setproduct_name] = useState("");
  const [company_name, setcompany_name] = useState("");
  const [price, setprice] = useState(0);
  const [genre, setgenre] = useState("");
  const [thumnailfile, setthumnailfile] = useState<any>(null);
  const [productpicfile, setproductpicfile] = useState<any>();
  const [productvideofile, setproductvideofile] = useState<any>();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("company", company_name);
    formData.append("genre", genre.toLowerCase());
    formData.append("price", price.toString());
    formData.append("product_thumbnail", thumnailfile);

    if (productpicfile) {
      //handle the array of pic file
      for (let i of productpicfile) {
        formData.append("product_pics", i);
      }
    }
    if (productvideofile) {
      // Handle the array of video files
      for (let i of productvideofile) {
        formData.append("product_videos", i);
      }
    }

    const postproduct = addProducts(formData);
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
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
            onChange={(e) => setproduct_name(e.target.value)}
          />
        </div>
        <div className="company_name">
          <div className="label">
            <div className="lable-text font-semibold text-white ts-md">
              Company Name
            </div>
          </div>
          <input
            type="text"
            placeholder="enter a company name"
            className="input input-ghost "
            onChange={(e) => setcompany_name(e.target.value)}
          />
        </div>
        <div className="media file flex">
          <div className="thumnail">
            <div className="label">
              <h3 className="label-text font-semibold text-white ts-md">
                Select Thumnail
              </h3>
            </div>
            <Thumnail onselectthumnail={setthumnailfile} />
          </div>
          <div className="product_pic">
            <div className="label">
              <h3 className="label-text font-semibold text-white ts-md">
                Select product pic
              </h3>
            </div>
            <ImageFile onselectproductpic={setproductpicfile} />
          </div>
          <div className="videos">
            <div className="label  ">
              <h3 className="lable-text font-semibold text-white ts-md">
                select product videos
              </h3>
            </div>
            <VideoFile onselectproductvideo={setproductvideofile} />
          </div>
        </div>
        <div className="price">
          <div className="lable">
            <h3 className="lable-text font-semibold text-white ts-md">price</h3>
          </div>
          <div className="price">
            <label className="input input-bordered w-full max-w-[10rem] flex items-center gap-2 ml-5">
              <div className="icon">
                <FaDollarSign />
              </div>
              <input
                type="text"
                className=""
                placeholder="enter a price.."
                onChange={(e: any) => setprice(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="genre">
          <details className="dropdown">
            <summary className=" m-1 btn">
              {genre != "" ? genre : "select a genre"}
            </summary>
            <ul
              className="btn p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
              onClick={(e: any) => setgenre(e.target.textContent)}
            >
              <li>
                <a>Action</a>
              </li>
              <li>
                <a>Adventure</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <button className="btn btn-ghost" type="submit">
        Submit
      </button>
    </form>
  );
}
