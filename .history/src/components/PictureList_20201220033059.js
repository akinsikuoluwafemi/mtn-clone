import React, {useContext} from 'react';
import { PhotosContext, LoadingContext } from '../ContextFile';
import './PictureList.scss';
import PictureItem from './PictureItem';
import ClearIcon from "@material-ui/icons/Clear";


export default function PictureList() {
    // let {loading, setLoading } = useContext(PhotosContext);
    
    let { photos, setPhotos } = useContext(PhotosContext);
   
    // console.log(photos)

    return (
        <div className="modal">
            <div className="modal-content">
                {photos.length}
                <PictureItem photo={photos}/>
             </div>
        </div>
    )
}
