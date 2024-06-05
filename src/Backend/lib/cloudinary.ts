import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

// Configure Cloudinary
cloudinary.config({
  cloud_name: "dwn7yhtjr",
  api_key: "844187343234246",
  api_secret: "4gJQ0TQhjD7xxYkn12yjuR85ZXs",
});

const uploads = (
  folder:any,
  fileBuffer: Uint8Array,
  resourceType: "image" | "video" | "raw" | "auto"
) => {
  return new Promise((resolve, reject) => {
    const streamLoad = cloudinary.uploader.upload_stream(

       
      { resource_type: resourceType,folder:folder },
      (error, result) => {
        if (result) {
          resolve({ public_id: result.public_id, url: result.url });
        } else {
          reject(error);
        }
      }
    );

    const readableStream = new Readable({
      read() {
        this.push(fileBuffer);
        this.push(null);
      },
    });

    readableStream.pipe(streamLoad);
  });
};

export { uploads, cloudinary };
