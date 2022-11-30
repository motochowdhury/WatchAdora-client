import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOut";

const stripePromise = loadStripe(process.env.REACT_APP_PK);

const Payment = () => {
  const booking = useLoaderData();
  return (
    <div className="mt-20">
      <div>
        <h1 className="text-xl font-poppins text-center my-10">
          Please Pay ${booking?.resalePrice} for
        </h1>
        <h4>{}</h4>
        <div className="w-96 mx-auto">
          <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
