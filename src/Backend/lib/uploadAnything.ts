import { NextRequest } from "next/server";
import { uploads } from "@/Backend/lib/cloudinary";

interface UploadResponse {
  folder:string;
  public_id: string;
  url: string;
}

async function uploadMedia(req: NextRequest) {
  const files = await req.formData();
  const company = files.get("company");
  const genre = files.get("genre");
  const price = files.get("price");
  const product_name = files.get("product_name");
  const productpicArray = files.getAll("product_pics") as File[];
  const productvideoArray = files.getAll("product_videos") as File[];

  const thumbnailData = files.get("product_thumbnail") as File;

  //to catch the cloudinary data;
  const imageUrls: string[] = [];
  const videoUrls: string[] = [];
  let thumbnailUrl = "";
  //for productpics
  for (const fileData of productpicArray) {
    const arrayBuffer = await fileData.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    // Determine the resource type based on the file mimetype
    const resourceType = fileData.type.startsWith("image/") ? "image" : "video";

    const uploadResponse = await uploads(product_name,uint8Array, resourceType) as UploadResponse;

    // Separate the URLs based on the resource type
    if (resourceType === "image") {
      imageUrls.push(uploadResponse.url);
    } else {
      videoUrls.push(uploadResponse.url);
    }
  }
  //for product videos
  for (const fileData of productvideoArray) {
    const arrayBuffer = await fileData.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    // Determine the resource type based on the file mimetype
    const resourceType = fileData.type.startsWith("image/") ? "image" : "video";

    const uploadResponse = await uploads(product_name,uint8Array, resourceType) as UploadResponse;

    // Separate the URLs based on the resource type
    if (resourceType === "image") {
      imageUrls.push(uploadResponse.url);
    } else {
      videoUrls.push(uploadResponse.url);
    }
  }
  if (thumbnailData) {
    const arrayBuffer = await thumbnailData.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    const uploadResponse = await uploads(product_name,uint8Array, "image") as UploadResponse;
    thumbnailUrl = uploadResponse.url;
  }
if(imageUrls || videoUrls || thumbnailUrl){
  return {
    company,
    price,
    genre,
    product_name,
    imageUrls,
    videoUrls,
    thumbnailUrl,
  };
}
 
}

export { uploadMedia };
