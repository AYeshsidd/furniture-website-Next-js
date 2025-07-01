import Prefotter from "../component/Prefooter";
import Image from "next/image";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";


export default function Cart(){

return(
<> <div className="bg-cover bg-center bg-no-repeat bg-[url('/blur.png')] h-[316px]">
                  <div className="relative top-[15%] left-[50%] transform -translate-x-1/2 flex justify-center flex-col items-center">
                      <Image src={"/mainlogo.png"} width={77} height={77} alt="Logo" />
                      <h3 className="font-bold text-2xl md:text-3xl">Cart</h3>
                      <div className="flex gap-2">
                          <span className="font-medium text-base">Home | </span>
                          <span className="font-light text-base">cart</span>
                      </div>
                  </div>
              </div>
     
      <div className="md:mx-24 space-x-9 lg:space-x-32 flex my-24 justify-start  bg-[#F9F1E7] md:p-5 py-4 text-base text-[#000000] font-medium">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>

      <div className="md:flex lg:justify-start ">
      <div className="md:mx-10 flex gap-5 ">
     <img src="cart_itom.png" alt="sofa" width={108} height={105} className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[108px] md:h-[105px] object-contain" />
     
    <div className="md:flex grid grid-cols-1 gap-4 md:space-x-16 text-base "><p className="text-[#9F9F9F]">Asgard Sofa</p>
          <p className="text-[#9F9F9F]">RS:250,000</p>
          <p className="text-[#000000]  font-extrabold border border-gray-500 rounded-lg w-7 h-6 flex items-center justify-center">1</p>
          <p className="text-[#9F9F9F]">RS:250,000</p>
          <AiFillDelete className="text-[#B88E2F] w-6 h-5" />
          </div>
          </div>
     </div>

    <div className="mt-12 md:mt-2 p-6 bg-[#F9F1E7] ml-auto md:mr-20 md:max-w-[350px] h-[330px] text-center">
        <h1 className="text-4xl text-center font-bold mb-8">Cart Totals </h1>
        
        <h2 className="text-base text-[#000000] font-medium mx-3 mb-6">Subtotal
        
         <span className="text-[#9F9F9F] font-normal mx-12  text-base ">Rs:2500.000</span></h2>
          
        <h2 className="text-base font-medium">Total
        <span className="text-[#B88E2F] font-medium text-xl mx-10 ">Rs. 250,000.00</span></h2>
        <br />
        <br />
         
        <Link href="./checkout"><button  className="border-2 px-6 md:px-12 py-3 border-black rounded-xl  hover:bg-[#B88E2F] transition-all hover:shadow-2xl text-xl mx-12 font-normal">
          Check Out
        </button></Link>
      </div>  


 <Prefotter/> 
                 
</>

);



}
