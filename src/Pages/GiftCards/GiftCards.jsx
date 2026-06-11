import React, { useState } from "react";

const GiftCards = () => {
  const [amount, setAmount] = useState("10");

  const amounts = ["10", "20", "50", "100"];

  return (
    <div className="min-h-screen px-4 py-12 bg-black">
      <div className="grid items-start gap-8 mx-auto max-w-7xl lg:grid-cols-2">

        {/* Left Side Image */}
        <div className="overflow-hidden border rounded-lg border-zinc-800">
          <img
            src="https://i.ibb.co/4nBvY8Y/gift-card.jpg"
            alt="Gift Card"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side Form */}
        <div className="bg-[#0d0d0d] border border-zinc-800 rounded-lg p-6">

          <h2 className="mb-2 text-2xl font-bold text-yellow-400">
            Buy Elite gift cards
          </h2>

          <p className="mb-6 text-sm text-gray-400">
            Use it for all our competitions and offers.
          </p>

          {/* Tabs */}
          <div className="grid grid-cols-3 mb-6 overflow-hidden border rounded-md border-zinc-700">
            <button className="bg-[#1a1a1a] text-white py-3 text-xs font-semibold border-r border-zinc-700">
              1. BUY YOUR GIFT
            </button>

            <button className="bg-[#121212] text-gray-400 py-3 text-xs font-semibold border-r border-zinc-700">
              2. SEND THE CODE
            </button>

            <button className="py-3 text-xs font-semibold text-white bg-zinc-700">
              3. LET THEM REDEEM AND ENJOY
            </button>
          </div>

          {/* Amount */}
          <div className="mb-5">
            <label className="block mb-3 text-sm text-white">
              Amount
            </label>

            <div className="grid grid-cols-2 gap-3">
              {amounts.map((item) => (
                <button
                  key={item}
                  onClick={() => setAmount(item)}
                  className={`py-3 rounded-md font-semibold transition ${
                    amount === item
                      ? "bg-white text-black"
                      : "bg-[#1a1a1a] text-white hover:bg-zinc-800"
                  }`}
                >
                  £{item}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Amount */}
          <div className="mb-4">
            <label className="block mb-2 text-sm text-white">
              Add custom amount here
            </label>

            <input
              type="number"
              placeholder="0.00"
              className="w-full bg-[#1a1a1a] border border-zinc-700 rounded-md px-4 py-3 text-white outline-none focus:border-red-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-2 text-sm text-white">
              Recipient's email
            </label>

            <input
              type="email"
              placeholder="Recipient's email"
              className="w-full bg-[#1a1a1a] border border-zinc-700 rounded-md px-4 py-3 text-white outline-none focus:border-red-500"
            />
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button className="py-3 font-semibold text-black bg-white rounded-md hover:opacity-90">
              Send now
            </button>

            <button className="bg-[#1a1a1a] text-white py-3 rounded-md font-semibold border border-zinc-700 hover:bg-zinc-800">
              Send later
            </button>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block mb-2 text-sm text-white">
              Message
            </label>

            <textarea
              rows="4"
              placeholder="Hope you enjoy this gift card!"
              className="w-full bg-[#1a1a1a] border border-zinc-700 rounded-md px-4 py-3 text-white outline-none focus:border-red-500 resize-none"
            />
          </div>

          {/* Checkout */}
          <button className="w-full py-4 font-bold tracking-wide text-white uppercase transition bg-red-600 rounded-md hover:bg-red-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;