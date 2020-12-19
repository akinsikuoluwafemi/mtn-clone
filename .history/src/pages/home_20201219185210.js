import React from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import '../components/Jumbotron.scss';
import '../components/Supplier.scss';
import SectionOne from '../components/SectionOne';
import SectionTwo from "../components/SectionTwo";
import svgTop from '../images/concave-top.svg';
import Footer from '../components/Footer';




export default function home() {
    return (
      <div>
        <Navbar />
        <Jumbotron />

        <div >
          <SectionOne />
          <img className="curved-svg-jumbotron" src={svgTop} alt="logo" />
        </div>
        <div style={{ background: "#f2f2f2" }} className=" py-4">
          <SectionTwo />
            </div>
        ,div>
      </div>
    );
}
