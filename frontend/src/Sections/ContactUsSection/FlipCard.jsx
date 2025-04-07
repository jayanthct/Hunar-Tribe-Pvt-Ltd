import React, { useState } from "react";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
    //   className="relative w-full max-w-md perspective"
      className="relative w-full lg:w-1/2 perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative duration-500 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="backface-hidden w-full">
          <div className="rounded-lg bg-accent3light p-6">
            <img
              src="https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Warehouse worker"
              className="mb-6 rounded-lg object-cover w-full h-48"
            />
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">
                Need <span className="text-[#FF8A00]">Bulk</span> In Orders?
              </h3>
              <p className="text-gray-600">
                Don't Worry!
                <br />
                Just A Call We Will Reach You
              </p>
              <div className="flex items-center gap-2 text-green-500">
                <i class="fa-regular fa-message"></i>
                <span className="font-medium">Order Through Text!</span>
              </div>
              <div className="flex justify-end">
                <i class="fa-solid fa-arrow-right text-[#FF8A00]"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute backface-hidden w-full rotate-y-180 top-0">
          <div className="rounded-lg bg-[#FFF9F0] p-6 h-full">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">
                Our <span className="text-[#FF8A00]">Bulk</span> Order Process
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-[#FF8A00] px-2 py-1 text-xs text-white">
                    1
                  </span>
                  <p>Contact us through the form or WhatsApp</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-[#FF8A00] px-2 py-1 text-xs text-white">
                    2
                  </span>
                  <p>Share your requirements and quantity</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-[#FF8A00] px-2 py-1 text-xs text-white">
                    3
                  </span>
                  <p>Get a customized quote within 24 hours</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-[#FF8A00] px-2 py-1 text-xs text-white">
                    4
                  </span>
                  <p>Confirm your order and enjoy bulk benefits!</p>
                </li>
              </ul>
              <div className="flex justify-end">
                <i class="fa-solid fa-arrow-right text-[#FF8A00]"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;