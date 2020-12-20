import React from 'react'

export default function PictureItem({photo}) {
    console.log(photo)
    const mappedPhoto = () => {
        const renderedPhoto = photo.map(item => <img src={item.urls.thumb }/>)
    } 


    return (
        <div>
           PictureItem 
        </div>
    )
}
