import React, {useContext} from 'react';
import { PhotosContext, LoadingContext } from '../ContextFile';


export default function PictureList() {
    let {loading, setLoading } = useContext(PhotosContext);
    let { photos, setPhotos } = useContext(LoadingContext);
   
    console.log(phos)

    return (
        <div>
            PictureList
        </div>
    )
}
