import React, {useContext} from 'react';
import { PhotosContext, LoadingContext } from '../ContextFile';


export default function PictureList() {
    let { } = useContext(PhotosContext);
    
    return (
        <div>
            PictureList
        </div>
    )
}
