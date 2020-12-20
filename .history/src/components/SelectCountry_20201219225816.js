import React from 'react'

export default function SelectCountry() {
    return (
      <div class="form-group form-select">
        <select class="form-control select " id="sel1">
          <option className="selected">Nigeria</option>
          <option>Ghana</option>
          <option>Afghanistan</option>
          <option>Benin</option>
          <option>Togo</option>
          <option>South Africa</option>
        </select>
      </div>
    );
}
