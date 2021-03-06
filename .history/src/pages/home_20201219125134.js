import React from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import '.'

export default function home() {
    return (
      <div>
        <Navbar />
        <Jumbotron />

        <section className="container existing-supplier-section">
          <h2>Existing MTN supplier</h2>

          <p>
            MTN has a responsibility to ensure that our business practices are
            conducted according to local and international laws, and adhere to
            the highest levels of ethical and moral conduct. We embrace this
            across all parts of our business, and we expect the same from our
            suppliers. The Supplier Code of Conduct sets out our approach to
            ethical and sustainable business practices and aims for the highest
            ethical conduct. It outlines our commitment to respect and promote
            human rights and fair workplace practices, including equal
            opportunities, environmentally sustainable business activities, and
            a zero-tolerance policy to bribery and corruption. MTN expects its
            suppliers to embrace this commitment to integrity by complying with
            and training its employees and subcontractors on the Supplier Code
            of Conduct. By working together, we can make the customer’s lives a
            whole lot brighter.
          </p>
        </section>
      </div>
    );
}
