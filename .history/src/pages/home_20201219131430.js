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
          <h2 className="existing-supplier-section-header">
            Existing MTN supplier
          </h2>

          <p className="existing-supplier-section-text">
            MTN has a responsibility to ensure that our business practices are
            conducted according to local and international laws, and adhere to
            the highest levels of ethical and moral conduct.
          </p>
          <p className="existing-supplier-section-text">
            We embrace this across all parts of our business, and we expect the
            same from our suppliers. The Supplier Code of Conduct sets out our
            approach to ethical and sustainable business practices and aims for
            the highest ethical conduct. It outlines our commitment to respect
            and promote human rights and fair workplace practices, including
            equal opportunities, environmentally sustainable business
            activities, and a zero-tolerance policy to bribery and corruption.
          </p>
          <p className="existing-supplier-section-text">
            MTN expects its suppliers to embrace this commitment to integrity by
            complying with and training its employees and subcontractors on the
            Supplier Code of Conduct.
          </p>
          <p className="existing-supplier-section-text">
            By working together, we can make the customer’s lives a whole lot
            brighter.
          </p>

          <div className="row">
            <div className="bg-success  col-lg col-md-12 ">
                

            </div>
            <div className=" bg-dark col-lg col-md-12">2</div>
          </div>
        </section>
      </div>
    );
}
