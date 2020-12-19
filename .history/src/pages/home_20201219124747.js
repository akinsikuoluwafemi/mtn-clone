import React from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';

export default function home() {
    return (
        <div>
            <Navbar />
            <Jumbotron />

            <section className="container">
                next section
            </section>
            
        </div>
    )
}
