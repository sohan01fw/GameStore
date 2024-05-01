import React, { useState } from 'react'

  
export default function Thumnail({onselectthumnail}:any) {
    const [thumbnailPic, setthumbnailPic] = useState()
    const handleThumbnail = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const files = e.target.files as FileList;
        const getImage:any = Array.from(files)
        setthumbnailPic(getImage[0])
        onselectthumnail(getImage[0])
    }

    const RenderThumbnail = () =>{
        if(!thumbnailPic) return null;
        return (
            <div className="image">
                <img src={URL.createObjectURL(thumbnailPic)} alt="thumbnail_pic" />
            </div>
        )
    }
  return (
    <div><input accept='image/*' onChange={handleThumbnail}   type="file" className='file-input  w-full max-w-sm' /><RenderThumbnail/></div>
  )
}
