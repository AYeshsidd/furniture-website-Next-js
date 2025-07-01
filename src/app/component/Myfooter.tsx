import Link from "next/link";
export default function Myfooter() {
  return (
    <>
      <div className="border"></div>

      <div className="px-4 md:px-24 my-12">
        <h1 className="font-bold w-[85px] h-16 size-24 text-2xl md:text-3xl">Funiro.</h1>
        <p className="font-normal text-gray-500 from-neutral-400  w-[285px] text-sm md:text-base mt-4 md:mt-6">
          400 University Drive suite 200 Coral 
          Gablesbles,
          <br />FL33134 USA
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-24 relative">
        
        <div className="flex flex-col">
          <h2 className="font-medium text-gray-500 text-lg mb-4">Links</h2>
          <ul className="font-medium space-y-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="flex flex-col mt-6 md:mt-0">
          <h2 className="font-medium text-gray-500 text-lg mb-4">Help</h2>
          <ul className="font-medium space-y-6">
            <li>Payment options</li>
            <li>Returns</li>
            <li>Privacy policies</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col mt-6 md:mt-0">
          <h2 className="font-medium text-gray-500 text-lg mb-4">Newsletter</h2>
          <span className="font-normal text-gray-500 underline text-sm md:text-base mb-4">
            ENTER YOUR EMAIL ADDRESS
          </span>
          <span className="font-medium underline cursor-pointer">SUBSCRIBE</span>
        </div>
      </div>

      <div className="border my-12"></div>

      <p className="font-normal text-sm md:text-base mx-24 my-4 py-3">
        2024 Furino. All rights reserved
      </p>
    </>
  );
}



