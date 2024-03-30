import { NextRequest, NextResponse } from "next/server";
import { uploads } from "@/Backend/lib/cloudinary";

interface UploadResponse {
  public_id: string;
  url: string;
}

async function uploadMedia(req: NextRequest) {
  const files = await req.formData();
  const company = files.get("company");
  const genre = files.get("genre");
  const price = files.get("price");
  const product_name = files.get("product_name");
  const fileDataArray = files.getAll("product_media") as File[];
  const thumbnailData = files.get("product_thumbnail") as File; // adjust 'product_thumbnail' to your fieldname
  const imageUrls = [];
  const videoUrls = [];
  let thumbnailUrl = "";

  for (const fileData of fileDataArray) {
    const arraybuffer = await fileData.arrayBuffer();
    const buffer = new Uint8Array(arraybuffer);
    const buffers = Buffer.from(buffer);

    // Determine the resource type based on the file mimetype
    const resourceType = fileData.type.startsWith("image/") ? "image" : "video";

    const uploadResponse = (await uploads(
      buffers,
      resourceType
    )) as UploadResponse;

    // Separate the URLs based on the resource type
    if (resourceType === "image") {
      imageUrls.push(uploadResponse.url);
    } else {
      videoUrls.push(uploadResponse.url);
    }
  }

  if (thumbnailData) {
    const arraybuffer = await thumbnailData.arrayBuffer();
    const buffer = new Uint8Array(arraybuffer);
    const buffers = Buffer.from(buffer);

    const uploadResponse = (await uploads(buffers, "image")) as UploadResponse;

    thumbnailUrl = uploadResponse.url;
  }

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

export { uploadMedia };
