import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

const uploads = (
  buffer: Buffer,
  resourceType: "image" | "video" | "raw" | "auto"
) => {
  return new Promise((resolve, reject) => {
    const streamLoad = cloudinary.uploader.upload_stream(
      { resource_type: resourceType },
      (error, result) => {
        if (result) {
          resolve({ public_id: result.public_id, url: result.url });
        } else {
          reject(error);
        }
      }
    );

    streamLoad.end(buffer);
  });
};

export { uploads, cloudinary };
