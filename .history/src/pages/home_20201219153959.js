import React from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import '../components/Supplier.scss';
import SectionOne from '../components/SectionOne';
import SectionTwo from "../components/SectionTwo";
import svgTop from '../images/concave-top.svg';

export default function home() {
    return (
      <div>
        <Navbar />
        <Jumbotron />

        <div >
          <SectionOne />
          <img src={svgTop} alt="logo" />
        </div>
        <div style={{ background: "#f2f2f2" }} className=" py-4">
          <SectionTwo />
        </div>
      </div>
    );
}
