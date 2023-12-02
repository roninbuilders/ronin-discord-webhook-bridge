import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center w-full h-20 px-4 text-black nav">
      <div className="flex items-center gap-2 font-bold ml-2">
        <Image className="mb-2" src='/puffy.png' width={40} height={51.12} alt='Webhooks' />
        <span className="hidden md:flex" >Webhook Notify</span>
      </div>
        <ronin-button />
    </div>
  );
};

export default Navbar;