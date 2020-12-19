import React from "react";
import SupplierCard from "./SupplierCard";

export default function SectionTwo() {
  return (
    <section className="container bg-da existing-supplier-section">
      <h2 className="existing-supplier-section-header">
        Become an MTN supplier
      </h2>

      <p className="existing-supplier-section-text">
        By working together, we can make the customer’s lives a whole lot
        brighter.
      </p>

      <div className="row">
        <SupplierCard name="Supplier Privacy Notice" size="(2 MB-PDF)" />
        <SupplierCard name="Code of Conduct" size="(556 KB-PDF)" />
      </div>
    </section>
  );
}
