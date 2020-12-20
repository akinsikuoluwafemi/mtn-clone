import React from 'react'

export default function PictureItem({photo}) {
    console.log(photo)
    const mappedPhoto = () => {
        const renderedPhoto = photo.map(item => <img id src={item.urls.thumb }/>)
    } 


    return (
        <div>
           PictureItem 
        </div>
    )
}
