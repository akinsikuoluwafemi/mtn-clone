import React, {useContext} from 'react';
import { PhotosContext, LoadingContext } from '../ContextFile';


export default function PictureList() {
    // let {loading, setLoading } = useContext(PhotosContext);
    if(photos)
    let { photos, setPhotos } = useContext(PhotosContext);
   
    console.log(photos)

    return (
        <div>
            PictureList
        </div>
    )
}
