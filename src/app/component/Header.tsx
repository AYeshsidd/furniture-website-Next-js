import Image from "next/image";
import Link from "next/link";
import { IoNotificationsOutline } from "react-icons/io5";
import {  IoSearch } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
export default function Header(){
    return(
      <>

      <div className="flex flex-col justify-between md:flex-row items-center px-4 md:px-10 py-6">
        <div className="mb-4 md:mb-0 "> 
            {/* creating space for small only */}
       
        <Image src={"/logo.png"} width={185} height={41} alt="LOGO"/>
        </div>

        <div className="my-5 md:w-[430px] md:h-24 left[505px] mx-6 flex flex-wrap justify-center space-x-6 md:space-x-10 text-sm md:text-base mb-4 md:mb-0">
          <Link href="http://localhost:3000" className=" hover:text-yellow-600">Home</Link>
          <Link href="./shop" className=" hover:text-yellow-600 ">Shop</Link>
          <Link href="./blog" className=" hover:text-yellow-600">Blog</Link>
          <Link href="./contact" className=" hover:text-yellow-600">Contact</Link> 
        </div>

<div className="flex space-x-9 my-8 text-2xl">  
   
   <Link href="./sidebar" className="hover:scale-125 hover:-translate-y-5 hover:transition-transform">
   {/* <Image src={"/vector.png"} width={23.33} height={18.67} alt="vector man" className=""/> */}
   <IoNotificationsOutline/>
   </Link>

   <Link href="./comparision" className="hover:scale-125 hover:-translate-y-5 transition-transform"> 
   {/* <Image src={"/search.png"} width={22.17} height={22.17} alt="product search" className=""/> */}
   <IoSearch/>
   </Link>
   
   <Link href="./singalProduct" className="hover:scale-125 hover:-translate-y-5 transition-transform">
    {/* <Image src={"/heart.png"} width={23.33} height={20.81} alt="vector man" className=""/> */}
    <GoHeart/>
    </Link>
 
  <Link href="./cart" className="hover:scale-125 hover:-translate-y-5 transition-transform">
    {/* <Image src={"/cart.png"} width={24.53} height={22.06} alt="vector man" className="" /> */}
    <IoCartOutline/>

  </Link>

</div>


    </div>




      </>
    );
  }

