"use client";

export default function AddProduct() {
  const handleFile = (e:any) =>{
    const file = (e.target.value)
   const x = URL.createObjectURL(file)
  }
  return (
    <form method="POST">
      <div className="pructname">
        <div className="form-control w-full max-w-xs">
          <div className="label">
            <h3 className="label-text font-semibold text-white ts-md">
              Product Name
            </h3>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-ghost w-full max-w-xs"
          />
        </div>
        <div className="flex">
          <div className="thumnail">
          <div className="label">
            <h3 className="label-text font-semibold text-white ts-md">
              Select Thumnail
            </h3>
          </div>
          <input accept="image/*"  multiple type="file" className="file-input w-full max-w-xs" onChange={handleFile} />
          </div>
        </div>
      </div>

      <button className="btn btn-ghost" type="submit">
        Submit
      </button>
    </form>
  );
}
