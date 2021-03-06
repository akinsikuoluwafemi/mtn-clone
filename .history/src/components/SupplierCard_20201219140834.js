import React from 'react'
import PublishIcon from "@material-ui/icons/Publish";

export default function SupplierCard() {
    return (
           <div className="supplier-card-content">
                <p>Supplier Privacy Notice</p>
                <small className="h3">(2 MB-pdf)</small>
              </div>
              <div className="supplier-card-upload-icon"><PublishIcon fontSize="large" /></div>
            </div>
    )
}
