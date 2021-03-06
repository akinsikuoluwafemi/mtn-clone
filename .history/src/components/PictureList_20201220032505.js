import React, {useContext} from 'react';
import { PhotosContext, LoadingContext } from '../ContextFile';
import './PictureList.scss';
import PictureItem from './'

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
