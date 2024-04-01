import React from "react";
import Layout from "../layout/layout";

const Easter = () => {
  return (
    <Layout>
      <div className="container text-center my-5">
        <h3>Easter Opening Hours</h3>
        <p>🐰</p>
        <p>
          Good Friday 29th March 7.30am - 12.00pm ( Open for collections only)
        </p>
        <p>Saturday 30th March - Closed</p>
        <p>Easter Sunday 31st March - Closed</p>
        <p>Easter Monday 1st April- Closed</p>
        <p>Tuesday 2nd April - Open as normal</p>
        <h5 className="text-light">
          Please note we are now Fully Booked for Deliveries leading up to the
          Easter holidays. Any orders received from now will be delivered the
          2nd April onwards. Orders for Collection can still be collected up to
          closing at 12pm Friday 29th
        </h5>
        <p>
          Collection will be available on 29th March Good Friday 7.30am -
          12.00pm*
        </p>
        <p>
          <b>
            <i>Happy Easter from Rose Building Supplies!</i>
          </b>
        </p>
      </div>
    </Layout>
  );
};

export default Easter;
