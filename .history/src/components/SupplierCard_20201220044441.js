import React from 'react'
import PublishIcon from "@material-ui/icons/Publish";
import './Supplier.scss';


export default function SupplierCard({name, size}) {
    return (
         <div className="supplier-card  col-lg col-md-12 px-2 py-2 ">
       <div className="supplier-card-content">
                <p>{ name}</p>
                <small className="h4">{ size}</small>
       </div>
       <div className="supplier-card-upload-icon">
         <PublishIcon fontSize="large" />
       </div>
     </div>
    )
   
}
