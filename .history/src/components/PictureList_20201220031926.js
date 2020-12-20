import React, {useContext} from 'react';
import { PhotosContext, LoadingContext } from '../ContextFile';
import {} from './PictureList'

export default function PictureList() {
    // let {loading, setLoading } = useContext(PhotosContext);
    
    let { photos, setPhotos } = useContext(PhotosContext);
   
    // console.log(photos)

    return (
        <div className="modal">
            PictureList
            <div className="modal-content">
                { photos.length}
             </div>
        </div>
    )
}
