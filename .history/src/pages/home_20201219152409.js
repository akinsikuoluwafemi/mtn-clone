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
        <div
          style={{ background: "#f2f2f2!important" }}
          className="bg-success py-4"
        >
          <SectionTwo />
        </div>
      </div>
    );
}
