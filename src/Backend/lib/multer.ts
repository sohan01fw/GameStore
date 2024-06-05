import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const fileFilter = (file: any, cb: any) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "video/mp4" ||
    file.mimetype === "video/mpeg" ||
    file.mimetype === "video/quicktime"
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Unsupported file format. Upload only JPEG/JPG, PNG, MP4, MPEG, or MOV"
      ),
      false
    );
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 }, // increase limit for larger video files
  fileFilter,
});

export { upload };
