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
        <div>
                
        </div>
        <SectionTwo/>



      </div>
    );
}
