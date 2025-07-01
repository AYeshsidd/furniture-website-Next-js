import Image from "next/image";
export default function(){
    return(
<>

<h1 className="font-bold my-5 py-2 text-center text-lg md:text-3xl lg:text-2xl">Browse The Range</h1>
<p className="text-center  md:text-base lg:text-sm">Lorem ipsum dolor sit amet, consectetur adipisi elit.</p>

<div className="flex items-center justify-center py-3 md:space-x-2  ">

<div className="flex flex-col items-center rounded-2xl space-y-2">
<Image src={"/table.png"} width ={381} height={475}  alt="LOGO"/> 
<p className="font-semibold">Dining</p>
</div>

<div className="flex flex-col items-center space-y-2">
<Image src={"/room.png"} width ={381} height={480} alt="LOGO"/>
 <p className="font-semibold text-center ">Living</p>
</div>

<div  className="flex flex-col items-center space-y-2">
<Image src={"/pillow.png"} width ={381} height={480}alt="LOGO"/> <p className="font-semibold">Bedroom</p>
</div>
</div>

<br /><br />

</>

    );
}

