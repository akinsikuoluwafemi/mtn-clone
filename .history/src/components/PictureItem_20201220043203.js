import React from 'react'

export default function PictureItem({photo}) {
    console.log(photo)
    const mappedPhoto = () => {
        const renderedPhoto = photo.map((item) => (
          <span>
            {" "}
            <img src={item.urls.thumb} />
          </span>
        ));
    } 


    return (
        <div>
           PictureItem 
        </div>
    )
}
