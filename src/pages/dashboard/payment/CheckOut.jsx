import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const { resalePrice, email, buyerName, _id, productId } = booking;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_API}/create-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearar ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify({ resalePrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [resalePrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setLoading(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        resalePrice,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,
        productId,
      };
      fetch(`${process.env.REACT_APP_SERVER_API}/payments`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearar ${localStorage.getItem("access-token")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Payment Success");
            setSuccess("Your Payment Is Accepted");
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setLoading(false);
  };

  return (
    <>
      <div className="w-96 mx-auto">
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn bg-orange-500 px-4 py-1 text-sm font-poppins rounded-full my-5"
            type="submit"
            disabled={!stripe || !clientSecret || loading}>
            Pay
          </button>
        </form>
        <p className="text-red-500">{cardError}</p>
        {success && (
          <div className="bg-gray-200 text-center my-5 p-3">
            <p className="text-green-500 font-poppins">{success}</p>
            <p className="font-roboto">
              Your transactionId:{" "}
              <span className="font-bold">{transactionId}</span>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckoutForm;
