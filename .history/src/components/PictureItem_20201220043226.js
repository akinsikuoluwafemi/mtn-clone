import React from 'react'

export default function PictureItem({photo}) {
    console.log(photo)
    const mappedPhoto = () => {
        const renderedPhoto = photo.map((item) => (
          <span id={item.id}>
            {" "}
            <img src={item.urls.thumb} />
          </span>
        ));
        return
    } 


    return (
        <div>
           PictureItem 
        </div>
    )
}