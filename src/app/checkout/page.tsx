"use client";
import Image from "next/image";
import { useState } from "react";
import Prefotter from "../component/Prefooter";
export default function Home() {
  const [selectedOption, setSelectedOption] = useState<string>(
    "Direct Bank Transfer"
  );

  const handleChange = (option: string): void => {
    setSelectedOption(option);
  };
  return (

<>  
     <div className="bg-cover bg-center bg-no-repeat bg-[url('/blur.png')] h-[316px]">
                <div className="relative top-[15%] left-[50%] transform -translate-x-1/2 flex justify-center flex-col items-center">
                    <Image src={"/mainlogo.png"} width={77} height={77} alt="Logo" />
                    <h3 className="font-bold text-2xl md:text-3xl">Checkout</h3>
                    <div className="flex gap-2">
                        <span className="font-medium text-base">Home | </span>
                        <span className="font-light text-base">checkout</span>
                    </div>
                </div>
            </div>
       
    <div className="p-5">
      <h1 className="whitespace-nowrap text-[2.25rem] font-semibold p-8">
        Billing Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
    <div className="col-span-1 space-y-7 p-8">
      <div className="flex flex-row w-full gap-4">
       <div className="flex flex-col w-full gap-3">
              <label>First Name</label>
              <input
                type="text"
                required
                className="w-full p-4 border border-[#9F9F9F] rounded-[.625rem] focus:ring-[#B88E2F] focus:border-[#B88E2F] focus:outline-none"
              />
            </div>
            <div className="flex flex-col w-full gap-3">
              <label>Last Name</label>
              <input
                type="text"
                required
                className="w-full p-4 border border-[#9F9F9F] rounded-[.625rem] focus:ring-[#B88E2F] focus:border-[#B88E2F] focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label>Company Name (Optional)</label>
            <input
              type="text"
              className="p-4 border border-[#9F9F9F] rounded-[.625rem] focus:ring-[#B88E2F] focus:border-[#B88E2F] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Country / Region</label>
            <input
              type="text"
              className="p-4 border border-[#9F9F9F] rounded-[.625rem] focus:ring-[#B88E2F] focus:border-[#B88E2F] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Street address</label>
            <input
              type="text"
              className="p-4 border border-[#9F9F9F] rounded-[.625rem] focus:ring-[#B88E2F] focus:border-[#B88E2F] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Town / City</label>
            <input
              type="text"
              className="p-4 border border-[#9F9F9F] rounded-[.625rem] focus:ring-[#B88E2F] focus:border-[#B88E2F] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Province</label>
            <input
              type="text"
              className="p-4 border border-[#9F9F9F] rounded-[.625rem] focus:ring-[#B88E2F] focus:border-[#B88E2F] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>ZIP Code</label>
            <input
              type="text"
              className="p-4 border border-[#9F9F9F] rounded-[.625rem] focus:ring-[#B88E2F] focus:border-[#B88E2F] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Phone</label>
            <input
              type="text"
              className="p-4 border border-[#9F9F9F] rounded-[.625rem] focus:ring-[#B88E2F] focus:border-[#B88E2F] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Email Address</label>
            <input
              type="text"
              className="p-4 border border-[#9F9F9F] rounded-[.625rem] focus:ring-[#B88E2F] focus:border-[#B88E2F] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Additional Information"
              className="p-4 border border-[#9F9F9F] rounded-[.625rem] focus:ring-[#B88E2F] focus:border-[#B88E2F] focus:outline-none"
            />
          </div>
        </div>
        <div className="col-span-1 space-y-5 p-8">
          <div className="flex justify-between">
            <h2 className="whitespace-nowrap font-medium text-[1.5rem]">
              Product
            </h2>
            <h2 className="whitespace-nowrap text-[1.5rem] font-medium">
              Subtotal
            </h2>
          </div>
          <div className="flex justify-between">
            <label className="text-[#9F9F9F] text-base">
              Asgaard sofa<span className="text-black text-xs"> x 1</span>
            </label>
            <label className="font-light text-base">Rs. 250,000.00</label>
          </div>
          <div className="flex justify-between">
            <label className="text-base">Subtotal</label>
            <label className="font-light text-base">Rs. 250,000.00</label>
          </div>
          <div className="flex justify-between">
            <label className="text-base">Total</label>
            <label className="font-bold text-[#B88E2F] text-2xl ">
              Rs. 250,000.00
            </label>
          </div>
          <hr className="mt-5 mb-5" />
          <form className="p-6 max-w-md mx-auto rounded-lg space-y-4">
            <fieldset className="space-y-4">
              <label
                className={`flex items-start space-x-2 ${
                  selectedOption === "Direct Bank Transfer"
                    ? "bg-gray-100 p-3 rounded-lg"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="Direct Bank Transfer"
                  checked={selectedOption === "Direct Bank Transfer"}
                  onChange={() => handleChange("Direct Bank Transfer")}
                  className="mt-1"
                />
                <div>
                  <p className="font-medium">Direct Bank Transfer</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>
              </label>
              <label
                className={`flex items-center space-x-2 ${
                  selectedOption === "Direct Bank Transfer Option"
                    ? "bg-gray-100 p-3 rounded-lg"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="Direct Bank Transfer Option"
                  checked={selectedOption === "Direct Bank Transfer Option"}
                  onChange={() => handleChange("Direct Bank Transfer Option")}
                />
                   <p className="text-gray-600">Direct Bank Transfer</p>
              </label>
              <label
                className={`flex items-center space-x-2 ${
                  selectedOption === "Cash On Delivery"
                    ? "bg-gray-100 p-3 rounded-lg"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="Cash On Delivery"
                  checked={selectedOption === "Cash On Delivery"}
                  onChange={() => handleChange("Cash On Delivery")} 
                />
                <p className="text-gray-600">Cash On Delivery</p>
              </label>
            </fieldset>

            <p className="text-sm text-gray-500">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our  
              <a href="#" className="text-black mx-1 font-medium no-underline">
               privacy policy
              </a>
              .
            </p>
            <button
              type="submit"
              className="w-full py-3 border border-black rounded-md text-black font-medium hover:bg-gray-100 transition"
            >
              Place order
            </button>
          </form>
        </div>
      </div>
    </div>
    <br />

    <Prefotter/>
    </>
  );
}
