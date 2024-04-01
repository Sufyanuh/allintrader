import React from "react";
import Layout from "../layout/layout";

const Responsible = () => {
  return (
    <Layout>
      <div className="container my-5" style={{maxWidth:"60%"}}>
        <h1 className="text-center">Responsible Sourcing</h1>
        <img
          src="/assets/images/banner1.jpg"
          alt="Responsible Sourcing"
          className="w-100"
          style={{ backgroundColor: "#D0C1AE" }}
        />
        <p>
          We are dedicated to consistently enhancing the proportion of certified
          raw material content in our timber products, adhering to
          internationally recognized standards. We frequently encourage our
          timber suppliers to elevate their performance.
        </p>
        <p>
          All our timber adheres to EUTR compliance, and we are able to provide
          FSCⓇ and PEFC certified products across all our branches. Our
          extensive selection of certified products encompasses MDF, OSB,
          chipboard, carcassing, softwood and hardwood, plywood, and a variety
          of solid hardwoods.
        </p>
      </div>
    </Layout>
  );
};

export default Responsible;
