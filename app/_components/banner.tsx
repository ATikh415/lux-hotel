import { House } from "lucide-react";
import Image from "next/image";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className=" relative">
      <Image
        src={"/img/banner.jpg"}
        alt="banner"
        width={1290}
        height={1411}
        className="object-cover h-48 w-full "
      />
      <div className="absolute h-16 w-screen flex items-center  gap-4 bg-primary -bottom-4 text-white px-32 ">
        <div className=" flex items-center gap-4">
        <IoHomeOutline className=" w-6 h-6 " />
        Hebergement
        </div>
        <div className=" flex items-center gap-4">
        <span>-</span>
        Villa
        </div>
        <div className=" flex items-center gap-4">
        <span>-</span>
        Villa Fleuris
        </div>
      </div>
    </div>
  );
};

export default Banner;
