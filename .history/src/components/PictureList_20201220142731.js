import React, {useContext} from 'react';
import { PhotosContext, ModalContext } from '../ContextFile';
import './PictureList.scss';
import PictureItem from './PictureItem';
import ClearIcon from "@material-ui/icons/Clear";


export default function PictureList() {
    // let {loading, setLoading } = useContext(PhotosContext);
    
    let { photos } = useContext(PhotosContext);
    let { showModal, setShowModal } = useContext(ModalContext);
    // console.log(photos)

    const handleClick = () => {
        setShowModal(false)
    }

    return (
      <div className={showModal ? `modal` : `hide-modal`}>
            <div className="modal-content">
                <span style={{cursor: 'pointer'}} onClick={handleClick}>
                <ClearIcon />
                </span>
          <PictureItem photo={photos} />
        </div>
      </div>
    );
}
