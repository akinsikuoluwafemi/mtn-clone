import React from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import '../components/Supplier.scss';


export default function home() {
    return (
      <div>
        <Navbar />
        <Jumbotron />

        <section className="container existing-supplier-section">
          <h2 className="existing-supplier-section-header">Existing MTN supplier</h2>

          <p className="existing-supplier-section-text">
            
          </p>
        </section>
      </div>
    );
}
