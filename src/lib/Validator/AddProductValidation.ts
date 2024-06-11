import * as z from "zod";

export const AddProductValidation = z.object({
  product_name: z.string().min(1, {message:"Product name is required!"}),
  company_name: z.string().min(1, {message:"Company name is required!"}),
  price: z.number().positive({message:"Price must be a positive number!"}).min(1,{message:"price is required!"}),
  genre:z.string(),
  product_thumbnail: z.instanceof(File).refine((files)=> files.size > 0, {message:"Image file is required"}).refine((file) => {
    return file.size <= 50 * 1024 * 1024; // Validate file size is less than 10 MB
  }, {message:'Thumbnail must be less than 10 MB'}),
  product_pics: z
      .array(z.instanceof(File))
      .refine((files) => files.length > 0, {message: 'At least one image is required.'})
      .refine((files) => files.every((file) => file.size <= 50 * 1024 * 1024), {message:'Image file size must be less than 50MB'}),
  product_videos: z
      .array(z.instanceof(File))
      .refine((files) => files.length > 0, {message: 'At least one video is required.'})
      .refine((files) => files.every((file) => file.size <= 50 * 1024 * 1024), {message:'Video file size must be less than 50MB'}),
});
