import React from 'react'

export default function PictureItem({photo}) {
    const mappedPhoto = () => {
        const renderedPhoto = photo.map((item) => (
          <span id={item.id}>
            {" "}
            <img src={item.urls.thumb} alt={item.id} />
          </span>
        ));
        return renderedPhoto
    } 


    return (
        <div>
           {mappedPhoto()}
        </div>
    )
}
