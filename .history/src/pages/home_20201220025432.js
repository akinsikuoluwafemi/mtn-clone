import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import '../components/Jumbotron.scss';
import '../components/Supplier.scss';
import SectionOne from '../components/SectionOne';
import SectionTwo from "../components/SectionTwo";
import svgTop from '../images/concave-top.svg';
import Footer from '../components/Footer';
import FooterCurve from '../images/Footer-curve.svg';
// import PictureList from '../components/PictureList';
import {PhotosContext, LoadingContext} from '../ContextFile'



export default function Home() {
   let [photos, setPhotos] = useState([]);
   let [loading, setLoading] = useState(false);
    console.log(photos)
    console.log

   
    return (
      <PhotosContext.Provider value={{ photos, setPhotos }}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          <div>
            <Navbar />
            <Jumbotron />

            <div>
              <SectionOne />
              <img className="curved-svg-jumbotron" src={svgTop} alt="logo" />
            </div>
            <div style={{ background: "#f2f2f2" }} className=" py-4">
              <SectionTwo />
              <img
                className="curved-svg-jumbotron"
                src={FooterCurve}
                alt="footer-curve"
              />
            </div>
            <div style={{ background: "#000" }}>
              <Footer />
            </div>
          </div>
        </LoadingContext.Provider>
      </PhotosContext.Provider>
    );
}
