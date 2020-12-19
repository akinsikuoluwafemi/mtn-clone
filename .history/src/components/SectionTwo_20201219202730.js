import React from "react";
import SupplierCard from "./SupplierCard";

export default function SectionTwo() {
  return (
    <section style={{}} className="container existing-supplier-section">
      <h2 className="existing-supplier-section-header">
        Become an MTN supplier
      </h2>

      <p className="existing-supplier-section-text">
            If you believe you can join MTN’s vision to make our customers lives a whole lot brighter, then click on apply below to fill in the registration form.
      </p>

      <div className="row">
        <SupplierCard name="Supplier Privacy Notice" size="(2 MB-PDF)" />
        <SupplierCard name="Code of Conduct" size="(556 KB-PDF)" />
      </div>
    </section>
  );
}
