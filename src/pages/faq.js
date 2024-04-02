import React from "react";
import Layout from "../layout/layout";

const FAQ = () => {
  return (
    <Layout>
      <div className="container my-5">
        <h3 className="text-center">Collection and Delivery FAQs</h3>
        <p className="text-center">
          Ordering for collection or delivery has never been easier! Here are a
          couple of frequently asked questions (FAQs) to put you in the right
          direction when using our services.
        </p>

        <h5>Collection</h5>
        <p>
          <strong>
            Do all your branches offer a click and collect service?
          </strong>
          <br />
          Yes, all our Rose Building Supplies branches (Peterborough,
          Huntingdon, and Corby) now offer a click and collect service. However,
          this will depend on our stock availability at each branch.
        </p>

        <p>
          <strong>How long after placing an order can I collect?</strong>
          <br />
          You will receive a phone call or email when your order is ready for
          collection. Orders are normally available to collect within the hour.
          For Saturday collections, please call your selected pickup branch
          before collection to confirm if your order is ready.
        </p>

        <p>
          <strong>What payment methods are accepted?</strong>
          <br />
          If you are a credit account customer, you can use your account to
          place the order. All cash customers are required to provide a payment
          option at checkout.
        </p>

        <p>
          <strong>How do I collect?</strong>
          <br />
          Bring your order number to our trade counters.
        </p>

        <h5>Delivery</h5>
        <p>
          <strong>Do all your branches offer a Delivery service?</strong>
          <br />
          Yes, all our Rose Building Supplies branches offer a Delivery Service
          Monday to Friday. Please note we don't do Saturday deliveries.
        </p>

        <p>
          <strong>How much will I need to pay for Delivery?</strong>
          <br />
          We offer a free local delivery service for orders over $50 inc VAT.
          For all orders under $50 inc VAT, a $18.00 inc VAT fuel surcharge will
          be applied at the checkout.
        </p>

        <p>
          <strong>What postcodes do you deliver to?</strong>
          <br />
          We deliver our building supplies to a range of postcodes across all
          three of our branches in Peterborough, Corby, and Huntingdon. Here is
          all the postcodes we offer a delivery service to:
        </p>
        <ul>
          <li>PE1* to PE19*</li>
          <li>NN8* to NN18*</li>
          <li>LE15* to LE16*</li>
          <li>CB23* to CB24*</li>
        </ul>

        <p>
          Please note we endeavor to deliver your goods to the nearest point of
          access, and this is down to the driver's discretion. We operate a
          crane offload service and tipper for all loose aggregates; please
          ensure there is sufficient access for these vehicles. If you are
          unsure or would like more information, then please contact our
          Transport Office on 01733 340270 Option 2.
        </p>

        <p>Last updated 5th March 2024.</p>
      </div>
    </Layout>
  );
};

export default FAQ;
