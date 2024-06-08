"use client";

import dynamic from "next/dynamic";
import {useForm, Controller, useController} from "react-hook-form";

const Thumnail = dynamic(() => import("../ui/UploadInputFile/Thumnail"));
const ImageFile = dynamic(() => import("../ui/UploadInputFile/ImageFile"));
const VideoFile = dynamic(() => import("../ui/UploadInputFile/VideoFile"));
import {FaDollarSign} from "@/lib/Icons";
import {useState} from "react";
import axios from "axios";
import {addProducts} from "@/utils/Actions/Products.Action";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {AddProductValidation} from "@/lib/Validator/AddProductValidation";

type FormData = z.infer<typeof AddProductValidation>;

const defaultFormData = {
    product_name: "",
    company_name: "",
    price: 0,
    genre: "",
    product_thumbnail: undefined,
    product_pics: [],
    product_videos: [],
};
export default function AddProduct() {
    //form validation
    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<FormData>({
        resolver: zodResolver(AddProductValidation),
        defaultValues: defaultFormData,
    });
    const onSubmit = async (data: any) => {
        console.log("hey");
        console.log("data", data);
        /*  const formData = new FormData();
        formData.append("product_name", data.product_name);
        formData.append("company", data.company_name);
        formData.append("genre", data.genre.toString());
        formData.append("price", data.price.toString());
        formData.append("product_thumbnail", data.product_thumbnail[0]);

        for (let i = 0; i < data.product_pics.length; i++) {
          formData.append("product_pics", data.product_pics[i]);
        }

        for (let i = 0; i < data.product_videos.length; i++) {
          formData.append("product_videos", data.product_videos[i]);
        }

        // Add your API call here to post formData
        console.log(formData); */
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" m-2 w-[53%] flex">
                <div className="top-two flex justify-around">
                    <div className="form-control w-full max-w-xs">
                        <div className="label">
                            <h3 className="label-text font-semibold text-white ts-md">
                                Product Name
                            </h3>
                        </div>
                        <input
                            type="text"
                            placeholder="enter a product name"
                            className="input input-ghost w-full max-w-xs"
                            {...register("product_name")}
                        />
                        {errors.product_name?.message && (
                            <p className="text-red-500 text-sm lowercase p-2">
                                {errors.product_name?.message}
                            </p>
                        )}
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
                            className="input input-ghost"
                            {...register("company_name")}
                        />
                        {errors.company_name?.message && (
                            <p className="text-red-500 text-sm lowercase p-2">
                                {errors.company_name?.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="">
                    <div className="price">
                        <div className="label">
                            <h3 className="label-text font-semibold text-white ts-md">
                                Price
                            </h3>
                        </div>

                        <div className="price">
                            <label className="input input-bordered flex items-center gap-2">
                                <div className="icon">
                                    <FaDollarSign/>
                                </div>
                                <input
                                    type="text"
                                    placeholder="enter a price"
                                    className="grow"
                                    {...register("price", {valueAsNumber: true})}
                                />
                            </label>

                            {errors.price?.message && (
                                <p className="text-red-500 text-sm lowercase p-2">
                                    {errors.price?.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="genre">
                        <h2 className="label-text font-semibold text-white ts-md">
                            select a genre:
                        </h2>
                        <select
                            className="select select-bordered w-full max-w-xs text-gray-400 text-sm"
                            {...register("genre")}
                        >
                            <option value="" selected hidden>
                                Action,Adventure....
                            </option>
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="horror">horror</option>
                            <option value="none">none</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="media file flex">
                <div className="thumnail">
                    <div className="label">
                        <h3 className="label-text font-semibold text-white ts-md">
                            Select Thumbnail
                        </h3>
                    </div>
                    <Controller
                        control={control}
                        name="product_thumbnail"
                        render={({field}) => (
                            <Thumnail
                                onSelectThumbnail={(file: File) => field.onChange(file)}
                            />
                        )}
                    />
                </div>
                <div className="product_pic">
                    <div className="label">
                        <h3 className="label-text font-semibold text-white ts-md">
                            Select product pic
                        </h3>
                    </div>
                    <Controller
                        control={control}
                        name="product_pics"
                        render={({field}) => (
                            <ImageFile onSelectProductPic={(files: File[]) => field.onChange(files)}/>
                        )}
                    />
                </div>
                <div className="videos">
                    <div className="label">
                        <h3 className="label-text font-semibold text-white ts-md">
                            Select product videos
                        </h3>
                    </div>
                    <Controller
                        control={control}
                        name="product_videos"
                        render={({field}) => (
                            <VideoFile onSelectProductVideo={(files: File[]) => field.onChange(files)}/>
                        )}
                    />
                </div>
            </div>
            <button className="btn btn-ghost" type="submit">
                Submit
            </button>
        </form>
    );
}
