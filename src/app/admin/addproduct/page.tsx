import AddProduct from "@/components/admin/AddProduct";

export default function page() {
  return (
    <div>
        <div className="btn">
            <h1 className="font-bold text-white text-xl" >Product Information</h1>
        </div>
        <div className="bborder mt-10 ">
            <AddProduct />
        </div>
    </div>
  )
}
