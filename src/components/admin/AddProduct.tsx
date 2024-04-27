"use client";

export default function AddProduct() {
  return (
    <form method="POST">
      <div className="pructname">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <h3 className="label-text font-semibold text-white ts-md">Product Name</h3>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-ghost w-full max-w-xs"
        />
      </label>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}
