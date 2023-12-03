import { set } from "@/api-calls";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  // const address =  getW3Address()
  return (
    <div className="flex justify-around items-center w-full h-20 px-4 text-black nav">
      <div onClick={()=> set.data(undefined)} className="cursor-pointer flex items-center gap-2 font-bold ml-2">
        <Image className="mb-2" src='/puffy.png' width={40} height={51.12} alt='Webhooks' />
        <span className="hidden md:flex" >Webhook Notify</span>
      </div>
      <ronin-button />
      {/* <span className="m-0 p-0 relative group flex items-center justify-center" >
        {Boolean(address) && <>
          <span style={{width: '20px', height: '20px', bottom: '-32px'}} className="scale-0 group-hover:scale-100 duration-75 absolute rotate-45 bg-[#4c91f8]" ></span>
          <span style={{ bottom:'-38px' }} className='text-[12px] scale-0 group-hover:scale-100 duration-75 text-white rounded-md p-1 bg-[#4c91f8] absolute text-center w-4/5' >Disconnect</span>
        </>}
      </span> */}
    </div>
  );
};

export default Navbar;