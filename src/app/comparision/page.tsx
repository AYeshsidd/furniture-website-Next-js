import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import Prefotter from "../component/Prefooter";
export default function Product() {
    return (
        <>
            <div className="bg-cover bg-center bg-no-repeat bg-[url('/blur.png')] h-[316px]">
                <div className="relative top-[15%] left-[50%] transform -translate-x-1/2 flex justify-center flex-col items-center">
                    <Image src={"/mainlogo.png"} width={77} height={77} alt="Logo" />
                    <h3 className="font-bold text-3xl">Product Comparision</h3>
                    <div className="flex gap-2">
                        <span className="font-medium text-base">Home | </span>
                        <span className="font-light text-base">comparision</span>
                    </div>
                </div>
            </div>
            <br />
            
            <div className="flex space-x-16">
            
            <div className=" mx-16 justify-between ">
                <h1 className="text-[28px] font-medium w-[223px] h-[105px]">Go to Product page for more Products</h1><br />
                <p className=" underline text-[#727272] w-[115px] my-5">View More</p>

            </div>
            
            <div className="space-y-2">
                
                <img src="Asgard.png" width={239} height={142} alt="" className="bg-[#F9F1E7]" />
                
                <p className="w-[192px] h-[30px] font-medium text-2xl">Asgaard sofa</p>
                
                <p className="w-[130px] h-[27px] font-medium text-lg">RS.224,000.00</p>
                
                 <p className=" w-[27px] h-[27px] font-medium text-lg items-center ">4.7</p>
                
                <div className="flex w-[124px] h-[20px] text-lg relative -top-8 left-8 ">
                <IoStarSharp className="text-yellow-400"/>
                
                <IoStarSharp className="text-yellow-400"/>
                
                <IoStarSharp className="text-yellow-400"/>
                
                <IoStarSharp className="text-yellow-400"/>
                
                
                
                </div>
                
                
                </div>
         
                <div className="space-y-2">
                
                <img src="Outdoorsofa.png" width={204} height={211} alt="" className="bg-[#F9F1E7]" />
                
                <p className="w-[224px] h-[30px] font-medium text-2xl">Outdoor sofa set</p>
                
                <p className="w-[129px] h-[27px] font-medium text-lg">RS.250,000.00</p>
                
                 <p className=" w-[27px] h-[27px] font-medium text-lg items-center ">4.7</p>
                
                <div className="flex w-[124px] h-[27px] text-lg relative -top-8 left-8">
                <IoStarSharp className="text-yellow-400"/>
                
                <IoStarSharp className="text-yellow-400"/>
                
                <IoStarSharp className="text-yellow-400"/>
                
                <IoStarSharp className="text-yellow-400"/>
                </div>
                
                </div>

                
         <div>
            <br />
            <h1 className="text-2xl font-semibold w-[174px] h-[26px]">Add a Product</h1>
            <p className="w-[242px] h-[39px] my-3 px-2 py-2 font-semibold text-sm text-white bg-[#B88E2F] rounded-lg justify-between"> Choose a product 
                <RiArrowDropDownLine className="relative -top-7 left-3/4 w-24 h-9" /></p>
            </div>
            </div>
            
          <div className=" my-16 border border-[#D9D9D9]"></div>
          
         
          <div className="flex mx-28 space-x-24">
            
          <div className="flex-col">
            <h1 className="text-[28px] font-medium w-[175px] h-32">General</h1>
            <p className="text-xl font-normal h-24">Sales package</p>
            <p className="text-xl font-normal h-24">Model number</p>
            <p className="text-xl font-normal h-24">Configuration</p>
            <p className="text-xl font-normal h-24">Upholestary Material</p>
            <p className="text-xl font-normal h-24">Upholestary Color</p>
            <p className="text-xl font-normal h-24">sales package</p>
            

          </div>
          <div className="h-screen w-1 bg-[#D9D9D9] "></div>
    
          

          <div className="flex-col my-28">
            <br />
            <p className="text-xl font-normal h-24">1 sectional sofa</p>
            <p className="text-xl font-normal h-24">TB3OP6LAORHS</p>
            <p className="text-xl font-normal h-24">Solid wood</p>
            <p className="text-xl font-normal h-24">L - shaped</p>
            <p className="text-xl font-normal h-24">Fabric + Cotton</p>
            <p className="text-xl font-normal h-24">Bright Grey & lion</p>


          </div>
            
          <div className="h-screen w-1 bg-[#D9D9D9] "></div>
         
          <div className="flex-col my-28 ">
            <br />
            <p className="text-xl font-normal h-24">1 three seater, 2 singal seater</p>
            
             <p className="text-xl font-normal h-24">DTY3OP6LAORJO</p>
            <p className="text-xl font-normal h-24">Solid wood</p>
            <p className="text-xl font-normal h-24">L - shaped</p>
            <p className="text-xl font-normal h-24">Fabric + Cotton</p>
            <p className="text-xl font-normal h-24">Bright Grey & lion</p>
            </div>  
        
          </div>

<br />
          <div className="flex mx-28 space-x-24">
            
          <div className="flex-col">
            <h1 className="text-[28px] font-medium w-[175px] h-32">Product</h1>
            <p className="text-xl font-normal h-24">filling material</p>
            <p className="text-xl font-normal h-24">Finish type</p>
            <p className="text-xl font-normal h-24">Adjustable Headrest</p>
            <p className="text-xl font-normal h-24">Maximum Capacity</p>
            <p className="text-xl font-normal h-24">Origion of manufacture</p>
            

          </div>
          <div className="h-screen w-1 bg-[#D9D9D9] "></div>
    
          

          <div className="flex-col my-28">
            <br />
            <p className="text-xl font-normal h-24">Foam</p>
            <p className="text-xl font-normal h-24">Bright Grey & lion</p>
            <p className="text-xl font-normal h-24">No</p>
            <p className="text-xl font-normal h-24">280 KG</p>
            <p className="text-xl font-normal h-24">India</p>


          </div>
            
          <div className="h-screen w-1 bg-[#D9D9D9] "></div>
         
          <div className="flex-col my-28 ">
            <br />
            <p className="text-xl font-normal h-24">Matte</p>
            
             <p className="text-xl font-normal h-24">Bright Grey & lion</p>
            <p className="text-xl font-normal h-24">Yes</p>
            <p className="text-xl font-normal h-24">300 KG</p>
            <p className="text-xl font-normal h-24">India</p>

            </div>  
        
          </div>
          

          <div className="flex mx-28 space-x-24 my-24">
            
          <div className="flex-col ">
            <h1 className="text-[28px] font-medium w-[225px] h-32">Dimensions</h1>
            <p className="text-xl font-normal h-24">Width</p>
            <p className="text-xl font-normal h-24">height</p>
            <p className="text-xl font-normal h-24">Depth</p>
            <p className="text-xl font-normal h-24">weight</p>
            <p className="text-xl font-normal h-24">Seat weight</p>
            

          </div>
          <div className="h-screen w-1 bg-[#D9D9D9] "></div>
    
          

          <div className="flex-col my-28">
            <br />
            <p className="text-xl font-normal h-24">265.32</p>
            <p className="text-xl font-normal h-24">76 cm</p>
            <p className="text-xl font-normal h-24">No</p>
            <p className="text-xl font-normal h-24">280 KG</p>
            <p className="text-xl font-normal h-24">India</p>


          </div>
            
          <div className="h-screen w-1 bg-[#D9D9D9] "></div>
         
          <div className="flex-col my-28 ">
            <br />
            <p className="text-xl font-normal h-24">265.32cm</p>
             <p className="text-xl font-normal h-24">76cm</p>
            <p className="text-xl font-normal h-24">167.76</p>
            <p className="text-xl font-normal h-24">65 KG</p>
            <p className="text-xl font-normal h-24">41.52cm</p>

            </div>  
        
          </div>

          <div className="flex mx-28 space-x-24">
            
            <div className="flex-col">
              <h1 className="text-[28px] font-medium w-[175px] h-32">Warranty</h1>
              <p className="text-xl font-normal h-24">Warranty summary</p>
              <p className="text-xl font-normal h-24">Warranty service type</p>
              <p className="text-xl font-normal h-24">covered in Warranty</p>
              <p className="text-xl font-normal h-24">not covered in Warranty</p>
              <p className="text-xl font-normal h-24 my-20">Domestic Wareenty</p>
              
  
            </div>
            <div className="h-screen w-1 bg-[#D9D9D9] "></div>
      
            
  
            <div className="flex-col my-28">
              <br />
              <p className="text-xl font-normal h-24">1 year</p>
              <p className="text-xl font-normal h-24">For Warranty Claims  Email at : <br />operations@trevifurniture.com</p>
              <p className="text-xl font-normal h-24">Warranty Against Manufacturing Defect</p>
              <p className="text-xl font-normal h-24">The Warranty Does Not Cover Damages </p>
              <p className="text-xl font-normal h-24 my-16">1 Year</p>
              <br />
              <button className="text-white bg-[#B88E2F] hover:scale-125 shadow-xl px-2 py-4 w-[215px]">Add to cart</button>
  
  
            </div>
              
            <div className="h-screen w-1 bg-[#D9D9D9] "></div>
           
            <div className="flex-col my-28 ">
              <br />
              <p className="text-xl font-normal h-24">1.2 Year Manufacturing Warranty</p>
              
               <p className="text-xl font-normal h-24">For Warranty Claims  Email at : <br />operations@trevifurniture.com</p>
              <p className="text-xl font-normal h-24">Warranty of the product is limited to manufacturing defects only.</p>
              <p className="text-xl font-normal h-24">The Warranty Does Not Cover Damages </p>
              <p className="text-xl font-normal h-24 my-[50px]">3 Months</p>
<br />
              <button className="text-white bg-[#B88E2F] px-2 py-4 w-[215px] my-8 mx-3 shadow-xl hover:scale-125">Add to cart</button>
  
              </div>  
          
            </div>
<Prefotter/>
            


            


<br />
        </>
    );
}
