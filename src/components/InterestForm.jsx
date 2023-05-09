import React from "react";

const InterestForm = () => {
  return (
    <form className="needs-validation">
      <div className="mb-3">
          <label htmlFor="name">Full Name</label>
          <input type="text" className="form-control" id="name" placeholder="" />
      </div>
      <div className="mb-3">
          <label htmlFor="name">Phone Number</label>
          <input type="number" className="form-control" id="phone-number" placeholder="" />
      </div>

      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" placeholder="" />
      </div>

      <div className="mb-3">
        <label htmlFor="address">Vehicle Model</label>
        <input type="text" className="form-control" id="vehicle-model" placeholder="" required />
      </div>

      <div className="mb-3">
        <label htmlFor="address">Year of Manufacture</label>
        <input type="date" className="form-control" id="manufacture" placeholder="" required />
      </div>

      <div className="mb-3">
        <label htmlFor="address">Current Valuation</label>
        <input type="Number" className="form-control" id="valuation" placeholder="" required />
      </div>

      <div className="mb-3">
        <label htmlFor="address">Type of Cover</label>
        <input type="text" className="form-control" id="cover" placeholder="" required />
      </div>
      <hr className="mb-4" />
    </form>
  );
}

export default InterestForm;