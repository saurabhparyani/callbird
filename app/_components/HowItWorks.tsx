import React from "react";

const HowItWorks = () => {
  return (
    <div className="container mx-auto px-5 mb-20">
      <h2 className="text-4xl font-bold text-center mb-10">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* CARD 1 */}
        <div className="text-center">
          <div className="flex flex-col gap-y-4 justify-center items-center mt-5">
            <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-gray-500 text-xl font-bold">
              1
            </div>
            <h3 className="font-bold">Sign Up</h3>
            <p className="text-gray-500 text-sm">
              Create your free Callbird account
            </p>
          </div>
        </div>
        {/* CARD 2 */}
        <div className="text-center">
          <div className="flex flex-col gap-y-4 justify-center items-center mt-5">
            <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-gray-500 text-xl font-bold">
              2
            </div>
            <h3 className="font-bold">Set availability</h3>
            <p className="text-gray-500 text-sm">
              Set your available times for easy scheduling
            </p>
          </div>
        </div>
        {/* CARD 3 */}
        <div className="text-center">
          <div className="flex flex-col gap-y-4 justify-center items-center mt-5">
            <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-gray-500 text-xl font-bold">
              3
            </div>
            <h3 className="font-bold">Share your link</h3>
            <p className="text-gray-500 text-sm">
              Send your schedule link to your clients
            </p>
          </div>
        </div>
        {/* CARD 4 */}
        <div className="text-center">
          <div className="flex flex-col gap-y-4 justify-center items-center mt-5">
            <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-gray-500 text-xl font-bold">
              4
            </div>
            <h3 className="font-bold">Get Booked</h3>
            <p className="text-gray-500 text-sm">
              Receive confirmations for new appointments automatically
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
