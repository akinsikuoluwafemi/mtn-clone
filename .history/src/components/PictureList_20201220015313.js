import React, {useContext} from 'react';
import { PhotosContext, LoadingContext } from '../ContextFile';


export default function PictureList() {
    let {loading, setLoading } = useContext(PhotosContext);
    let { photos, setPhotos } = useContext(PhotosContext);
   
    console.log()


    return (
        <div>
            PictureList
        </div>
    )
}
