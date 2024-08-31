"use client";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);
  const [donationAmount, setDonationAmount] = useState(2000); // Default amount in cents
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    amount: 20.0,
  });
  const [donationType, setDonationType] = useState("Offerings"); // Default option

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleDonationTypeChange = (e) => {
    setDonationType(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const { error: backendError, clientSecret } = await fetch(
      "/api/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: donationAmount,
          donationType, // Include the donation type in the request
        }),
      }
    ).then((res) => res.json());

    if (backendError) {
      setError(backendError.message);
      setLoading(false);
      return;
    }

    const { error: stripeError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

    if (stripeError) {
      setError(stripeError.message);
      setLoading(false);
      return;
    }

    setPaymentSucceeded(true);
    setLoading(false);

    // Clear the form
    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      amount: 20.0,
    });
    setDonationAmount(2000);
    setDonationType("Offerings");
    elements.getElement(CardElement).clear();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg mb-4"
      style={{
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
      }}
    >
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Church Donation
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleInputChange}
          className="w-full p-3 border rounded-lg shadow-sm"
          placeholder="John"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          value={formValues.lastName}
          onChange={handleInputChange}
          className="w-full p-3 border rounded-lg shadow-sm"
          placeholder="Doe"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          className="w-full p-3 border rounded-lg shadow-sm"
          placeholder="john.doe@example.com"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Donation Amount (CAD)
        </label>
        <input
          type="number"
          name="amount"
          className="w-full p-3 border rounded-lg shadow-sm"
          placeholder="20.00"
          value={donationAmount / 100}
          onChange={(e) => setDonationAmount(e.target.value * 100)} // Convert dollars to cents
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Donation Type
        </label>
        <div className="flex flex-col">
          <label className="inline-flex items-center mb-2">
            <input
              type="radio"
              name="donationType"
              value="Offerings"
              checked={donationType === "Offerings"}
              onChange={handleDonationTypeChange}
              className="form-radio h-4 w-4 text-blue-600"
              required
            />
            <span className="ml-2">Offerings</span>
          </label>
          <label className="inline-flex items-center mb-2">
            <input
              type="radio"
              name="donationType"
              value="Tithes"
              checked={donationType === "Tithes"}
              onChange={handleDonationTypeChange}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="ml-2">Tithes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="donationType"
              value="Mission Support"
              checked={donationType === "Mission Support"}
              onChange={handleDonationTypeChange}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="ml-2">Mission Support</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Card Details
        </label>
        <CardElement
          className="p-3 border rounded-lg shadow-sm"
          options={{
            hidePostalCode: true, // Hide the ZIP code field
          }}
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm mb-4 text-center">{error}</div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className={`w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-lg font-semibold transition duration-300 ${
          loading
            ? "cursor-not-allowed opacity-50"
            : "hover:from-green-500 hover:to-blue-600"
        }`}
      >
        {loading
          ? "Processing..."
          : `Donate $${(donationAmount / 100).toFixed(2)} CAD`}
      </button>

      {paymentSucceeded && (
        <div className="text-green-500 text-center mt-4">
          Payment Succeeded! Thank you for your generosity.
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
