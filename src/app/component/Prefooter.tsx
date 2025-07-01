import Image from "next/image";
import Link from "next/link";


export default function Prefotter(){
return(
    <>
        
        <div className="mt-5 mb-5 flex flex-col sm:flex-row justify-evenly items-center p-4 sm:p-8 w-full h-auto bg-[#F9F1E7]">
        <div className="flex flex-col items-center text-center">
          <Image src="/trophy 1.png" width={60} height={60} alt="Trophy" />
          <h2 className="font-bold text-xl mt-2">High Quality</h2>
          <p className="text-[#898989] text-lg font-medium">crafted from top materials</p>
        </div>

        <div className="flex flex-col items-center text-center mt-6 sm:mt-0">
          <Image src="/guarantee.png" width={60} height={60} alt="Guarantee" />
          <h2 className="font-bold text-xl mt-2">Warranty Protection</h2>
          <p className="text-[#898989] text-lg font-medium">Over 2 years</p>
        </div>

        <div className="flex flex-col items-center text-center mt-6 sm:mt-0">
          <Image src="/shipping.png" width={60} height={60} alt="Shipping" />
          <h2 className="font-bold text-xl mt-2">Free Shipping</h2>
          <p className="text-[#898989] text-lg font-medium">Order over 150 $</p>
        </div>

        <div className="flex flex-col items-center text-center mt-6 sm:mt-0">
          <Image src="/support.png" width={60} height={60} alt="Support" />
          <h2 className="font-bold text-xl mt-2">24 / 7 Support</h2>
          <p className="text-[#898989] text-lg font-medium">Dedicated support</p>
        </div>
      </div>
        
        
         
    </>
);

}