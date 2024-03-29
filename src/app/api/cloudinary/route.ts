import { NextRequest, NextResponse } from "next/server";
import { upload } from "@/Backend/lib/multer";
import { uploads } from "@/Backend/lib/cloudinary";

export const config = {
  api: {
    bodyParser: false,
  },
};

const multerMiddleware = upload.array("product_pics", 12);

async function POST(req: NextRequest) {
  return new Promise((resolve, reject) => {
    //@ts-ignore
    multerMiddleware(req, null, async (err) => {
      if (err) {
        console.error("Error:", err);
        resolve(NextResponse.json({ errMsg: err.message }, { status: 500 }));
      } else {
        try {
          const files = await req.formData();
          const fileDataArray = files.getAll("product_pics") as File[];
          const urls = [];

          for (const fileData of fileDataArray) {
            const arraybuffer = await fileData.arrayBuffer();
            const buffer = new Uint8Array(arraybuffer);
            const buffers = Buffer.from(buffer);
            const uploadResponse = await uploads(buffers);
            //@ts-ignore
            urls.push(uploadResponse.url);
          }

          resolve(
            NextResponse.json({
              data: "Files uploaded successfully",
              urls: urls,
            })
          );
        } catch (error) {
          console.error("Error:", error);
          resolve(NextResponse.json({ errMsg: error }, { status: 500 }));
        }
      }
    });
  });
}

export { POST };
