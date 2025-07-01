import Prefotter from "../component/Prefooter";
import Image from "next/image";
import { TbClockHour4Filled } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { TbPhoneFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

export default function contact() {
    return (
        <>
          
               <div className="bg-cover bg-center bg-no-repeat bg-[url('/blur.png')] h-[316px]">
                          <div className="relative top-[15%] left-[50%] transform -translate-x-1/2 flex justify-center flex-col items-center">
                              <Image src={"/mainlogo.png"} width={77} height={77} alt="Logo" />
                              <h3 className="font-bold text-2xl md:text-3xl">Contact</h3>
                              <div className="flex gap-2">
                                  <span className="font-medium text-base">Home | </span>
                                  <span className="font-light text-base">contact</span>
                              </div>
                          </div>
                      </div>
                 
          
            <div className="text-center my-16 md:my-28">
                <p className="font-bold text-2xl md:text-4xl">Get in Touch With Us</p>
                <p className="text-[#9F9F9F] p-3 md:text-center font-normal text-base md:w-[644px] md:h-48 mx-auto">
                    For more information about our product & services, please feel free to drop us an email. Our staff will always be there to help you out. Do not hesitate!
                </p>
            </div>

            <div className="relative -top-20 md:-top-56">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center px-6 lg:px-20 py-12 gap-10">
                    
                    <div className="space-y-8 w-full lg:w-1/2">
                        
                        <div className="flex items-start gap-4">
                            <FaLocationDot className="text-xl text-[#B88E2F]" />
                            <div>
                                <h2 className="font-bold text-lg">Address</h2>
                                <p className="text-base">
                                    236 5th SE Avenue, New <br />York NY10000, United <br />States
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                            <TbPhoneFilled className="text-xl text-[#B88E2F]" />
                            <div>
                                <h2 className="font-bold text-lg">Phone</h2>
                                <p className="text-base">Mobile: +(84) 546-6789</p>
                                <p className="text-base">Hotline: +(84) 456-6789</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                            <TbClockHour4Filled className="text-xl text-[#B88E2F]" />
                            <div>
                                <h2 className="font-bold text-lg">Working Time</h2>
                                <p className="text-base">Monday-Friday: 9:00 - <br />22:00</p>
                                <p className="text-base">Saturday-Sunday: 9:00 - <br />21:00</p>
                            </div>
                        </div>
                    </div>

                    
                  
                  
                    <div className="w-full lg:w-1/2 max-w-md mx-auto">
                        <form className="flex flex-col space-y-4">
                            <label htmlFor="name" className="font-medium text-base">Your Name</label>
                            <input type="text" id="name" className="border border-gray-300 p-3 rounded-md w-full" placeholder="ABC" />

                            <label htmlFor="email" className="text-base font-medium">Email Address</label>
                            <input type="email" id="email" className="border border-gray-300 p-3 rounded-md w-full" placeholder="ABC@def.com" />

                            <label htmlFor="subject" className="font-medium text-base">Subject</label>
                            <input type="text" id="subject" className="border rounded-md w-full border-gray-300 p-3" placeholder="Enter subject (optional)" />

                            <label htmlFor="message" className="font-medium">Message</label>
                            <textarea id="message" className="border rounded-md w-full border-gray-300 p-3" placeholder="Hi! I would like to ask about..."></textarea>

                            <button type="submit" className="bg-[#B88E2F] transition-opacity hover:opacity-70 text-white px-16 py-2 rounded-md self-start">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <Prefotter/>
            </div> 



    
        </>
    );
}
