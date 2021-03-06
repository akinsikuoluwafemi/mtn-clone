import React from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import '../components/Supplier.scss';
import PublishIcon from "@material-ui/icons/Publish";
import SupplierCard from '../components/SupplierCard';
import SectionOne from '../components/SectionOne';
import SectionTwo from "../components/SectionTwo";


export default function home() {
    return (
      <div>
        <Navbar />
        <Jumbotron />

        <SectionOne />
        <div style={{ background: "#f2f2f2" }} className=" py-4">
          {/*  */}
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            height="25px"
            viewBox="0 0 1366 25"
            xml:space="preserve"
            preserveAspectRatio="none"
            class="mtn-curve__concave mtn-curve__curve-desktop"
          >
            <path
              d="M683.1,23.9C386.6,23.9,129.2,14.1,0,0v25h1366V0C1236.7,14.1,979.4,23.9,683.1,23.9z"
              class="mtn-svg-fill--grey"
              style="z-index: 2;"
            ></path>
          </svg>
          {/*  */}
          <SectionTwo />
        </div>
      </div>
    );
}
