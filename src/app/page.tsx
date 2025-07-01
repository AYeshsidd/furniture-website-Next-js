import Header from "./component/Header";
import Myfooter from "./component/Myfooter";
import Browse from "./component/Browse";
import Wallpic from "./component/Wallpic";

import Image from "next/image";

export default function Home(){
  return(
    <>

<Wallpic/>
<Browse/>

<p className="text-center justify-center font-bold text-4xl py-7 ">Our products</p>


<div className=" flex items-center flex-wrap justify-center gap-6 px-4 sm:px-8  py-3 lg:px-16 md:space-x-2 ">

  <div className="flex flex-col rounded-2xl bg-[#F4F5F7]  space-y-2 py-4 px-4 max-w-[285px] w-full relative hover:bg-opacity-75 group  hover:bg-[#B88E27] hover:scale-110 transition-transform duration-300">
<Image  src={"/decoration.png"} width={285} height={301} alt="LOGO" className="bg-white"/>
<button className="text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white mx-5 justify-center rounded items-center bg-white h-10 absolute opacity-0 group-hover:opacity-100 transition-all duration-300 top-40 shadow-sm w-[202px] text-base font-mono">Add to cart</button>
  

<p className=" text-[#3A3A3A] text-2xl font-bold">Syltherine</p>
<p className=" text-[#898989] text-base font-normal">Stylish cafe chair</p>
<p className=" text-base font-bold">RS:2.500.00</p>

</div>

<div className="flex flex-col bg-[#F4F5F7] py-4 px-4 space-y-2 max-w-[285px] w-full rounded-2xl relative hover:bg-opacity-75 group  hover:bg-[#B88E27] hover:scale-110 transition-transform duration-300">
  <Image src={"/nothover.png"} width={300} height={301} alt="LOGO" className=" hover:opacity-75" />
  
  <button className="text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white mx-5 justify-center rounded items-center bg-white h-10 absolute opacity-0 group-hover:opacity-100 transition-all duration-300 top-40 shadow-sm w-[202px] text-base font-mono">Add to cart</button>
  
  
    <p className="text-[#3A3A3A] text-2xl font-bold">Syltherine</p>
  <p className="text-[#898989] text-base font-normal ">Stylish cafe chair</p>
  <p className="text-base font-bold">RS:2.500.00</p>
  
</div>



<div className="flex flex-col  py-4 px-4  max-w-[285px] w-full bg-[#F4F5F7] rounded-2xl space-y-2 relative hover:bg-opacity-75 group  hover:bg-[#B88E27] hover:scale-110 transition-transform duration-300 ">
<Image  src={"/sofa.png"} width={285} height={301} alt="LOGO" className="bg-white"/>
<button className="text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white mx-5 justify-center rounded items-center bg-white h-10 absolute opacity-0 group-hover:opacity-100 transition-all duration-300 top-40 shadow-sm w-[202px] text-base font-mono">Add to cart</button>
  
<p className=" text-[#3A3A3A] text-2xl font-bold">Lolito</p>
<p className=" text-[#898989] text-base font-normal">Luxtury big sofa</p>
<p className=" text-base font-bold">RS:7.500.00</p>

</div>


<div className="w-full flex flex-col bg-[#F4F5F7]  space-y-2 max-w-[285px] rounded-2xl px-4 py-4 hover:bg-opacity-75 group  hover:bg-[#B88E27] hover:scale-110 transition-transform duration-300 ">
<Image  src={"/dining.png"}  width={285} height={301} alt="LOGO" className="bg-white"/>
<button className="text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white mx-5 justify-center rounded items-center bg-white h-10 absolute opacity-0 group-hover:opacity-100 transition-all duration-300 top-40 shadow-sm w-[202px] text-base font-mono">Add to cart</button>
  
<p className=" text-[#3A3A3A] text-2xl font-bold">Respira</p>
<p className=" text-[#898989] text-base font-normal">outdoor bar table and stool</p>
<p className=" text-base font-bold">RS:500.00</p>

</div>

</div>

{/* 2nd row */}

<div className=" grid md:grid-cols-4 gap-2 sm:grid-cols-2 justify-center items-center md:mx-28 ">

  <div className="flex flex-col  py-4 px-4  max-w-[285px] w-full rounded-2xl bg-[#F4F5F7]  space-y-2 relative hover:bg-opacity-75 group  hover:bg-[#B88E27] hover:scale-110 transition-transform duration-300">
<Image  src={"/lamp.png"} width={285} height={301} alt="LOGO" className="bg-white"/>
<button className="text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white mx-5 justify-center rounded items-center bg-white h-10 absolute opacity-0 group-hover:opacity-100 transition-all duration-300 top-40 shadow-sm w-[202px] text-base  font-mono">Add to cart</button>
  
<p className=" text-[#3A3A3A] text-2xl font-bold">Grifo</p>
<p className=" text-[#898989] text-base font-normal">Night Lamp</p>
<p className=" text-base font-bold">RS:1500.00</p>

</div>
<div className="flex flex-col bg-[#F4F5F7] rounded-2xl  py-4 px-4 space-y-2 max-w-[285px] w-full hover:bg-opacity-75 group  hover:bg-[#B88E27] hover:scale-110 transition-transform duration-300 ">
<Image  src={"/sofachair.png"}  width={285} height={301} alt="LOGO" className="bg-white"/>
<button className="text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white mx-5 justify-center rounded items-center bg-white h-10 absolute opacity-0 group-hover:opacity-100 transition-all duration-300 top-40 shadow-sm w-[202px] text-base font-mono">Add to cart</button>
  
<p className=" text-[#3A3A3A] text-2xl font-bold">Muggo</p>
<p className=" text-[#898989] text-base font-normal">Small Mug</p>
<p className=" text-base font-bold">RS:7.500.00</p>


</div>


<div className="flex flex-col bg-[#F4F5F7] rounded-2xl  py-4 px-4 space-y-2 max-w-[285px] w-full relative hover:bg-opacity-75 group  hover:bg-[#B88E27] hover:scale-110 transition-transform duration-300">
<Image  src={"/sofatable.png"} width={285} height={301} alt="LOGO" className="bg-white"/>
<button className="text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white mx-5 justify-center rounded items-center bg-white h-10 absolute opacity-0 group-hover:opacity-100 transition-all duration-300 top-40 shadow-sm w-[202px] text-base font-mono">Add to cart</button>
  
<p className=" text-[#3A3A3A] text-2xl font-bold">Pingky</p>
<p className=" text-[#898989]  text-base font-normal">Cute bed sofa</p>
<p className=" text-base font-bold">RS:7.500.00</p>

</div>


<div className="flex flex-col bg-[#F4F5F7] rounded-2xl py-4 px-4 space-y-2 max-w-[285px] w-full hover:bg-opacity-75 group hover:bg-[#B88E27] hover:scale-110 transition-transform duration-300">
<Image  src={"/brownsofa.png"}  width={285} height={301} alt="LOGO" className="bg-white"/>
<button className="text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white mx-5 justify-center rounded items-center bg-white h-10 absolute opacity-0 group-hover:opacity-100 transition-all duration-300 top-40 shadow-sm w-[202px] text-base font-mono">Add to cart</button>
  
<p className=" text-[#3A3A3A] text-2xl font-bold">Potty</p>
<p className=" text-[#898989] text-base font-normal">Mini flower pot</p>
<p className=" text-base font-bold">RS:500.00</p>

</div>
</div>
<br />

<div className="flex items-center justify-center mt-6">
  <button className="text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white font-bold border border-[#B88E2F] transition-all hover:scale-90 py-2 px-6 rounded-md">
    Show More
  </button>
</div>
{/* Another section starts */}


<div className=" bg-[#FCF8F3] py-10 my-12 lg:w-full ">
        <div className="sm:mx-32 sm:text-left space-y-9  ">

        <h1 className="mx-6 leading-tight font-bold md:text-4xl">50 + Beautiful rooms <br className="hidden sm:block" />inspiration</h1>
        
        <p className="sm:text-base mx-6">Our designer already made a lot of beautiful prototype <br className="" /> of rooms that
          inspires
        </p>
        
        <div className="mx-6 flex justify-center sm:justify-start ">
        <button className="bg-[#B88E2F] my-2 p-3 rounded-lg font-mono text-white hover:opacity-75 ">Explore More</button>
        </div>
       
        <div className="mx-5 grid grid-cols-2 gap-1">
        <Image src={"/fiveimages.png"} width={404} height={582} alt="5 pics" className="md:mx-24"/> 
       
        <Image src={"/furnitureset.png"} width={372} height={486} alt="furniture"className="md:mx-24" />
       
        </div>
       
        </div>

</div> 

       <p className="text-center text-[#616161] text-xl">Share your setup with</p>
       <p className="text-center text-[#3A3A3A] font-bold text-4xl">#FuniroFurniture</p>

       <div className="my-9 md:px-16 grid grid-cols-3 space-y-2 md:space-x-12 lg:grid-cols-4 lg:justify-evenly bg-[#FCF8F3]   ">

       <Image src={"/desk.png"} width={451} height={323} alt="furniture"className="" />
       <Image src={"/chairs.png"} width={195} height={392} alt="furniture" className="mt-6"/>
       <Image src={"/bed.png"} width={220} height={348} alt="furniture"className="mt-3 " />
       <Image src={"/food.png"} width={225} height={433} alt="furniture" className=" "/>
       <Image src={"/chair1.png"} width={181} height={323} alt="furniture"className=" " />
       <Image src={"/pot.png"} width={344} height={242} alt="furniture" className=" "/>
       <Image src={"/frame.png"} width={188} height={242} alt="furniture" className=" "/>
       <Image src={"/spoon.png"} width={218} height={196} alt="furniture" className=" "/>

       </div>
  </>
  );
}