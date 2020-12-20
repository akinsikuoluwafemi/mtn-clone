import React, {useContext} from 'react';
import { PhotosContext, LoadingContext } from '../ContextFile';


export default function PictureList() {
    let {loading, setLoading } = useContext(PhotosContext);

    

    return (
        <div>
            PictureList
        </div>
    )
}
