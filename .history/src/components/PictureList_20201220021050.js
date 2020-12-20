import React, {useContext} from 'react';
import { PhotosContext, LoadingContext } from '../ContextFile';


export default function PictureList() {
    // let {loading, setLoading } = useContext(PhotosContext);
    
    let { photos, setPhotos } = useContext(Phot);
   
    console.log(photos)

    return (
        <div>
            PictureList
        </div>
    )
}
