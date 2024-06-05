import { NextRequest, NextResponse } from "next/server";
import { upload } from "@/Backend/lib/multer";
import { uploadMedia } from "@/Backend/lib/uploadAnything";

export const config = {
  api: {
    bodyParser: false,
  },
};

const multerMiddleware = upload.array("product_media", 12);
export async function getProductData(req: NextRequest) {
  return new Promise((resolve, reject) => {
    //@ts-ignore
    multerMiddleware(req, null, async (err) => {
      if (err) {
        console.error("Error:", err);
      } else {
        try {
          const data = await uploadMedia(req);
          return resolve({
            data: "Files uploaded successfully",
            urls: data,
          });
        } catch (error) {
          console.error("Error:", error);
          resolve(NextResponse.json({ errMsg: error }, { status: 500 }));
        }
      }
    });
  });
}
