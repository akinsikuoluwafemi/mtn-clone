import React from 'react'

export default function PictureItem({photo}) {
    console.log(photo)
    const mappedPhoto = () => {
        const renderedPhoto = photo.map(item => <img/>)
    } 


    return (
        <div>
           PictureItem 
        </div>
    )
}
