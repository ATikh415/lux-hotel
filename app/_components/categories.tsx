import { Button } from "@/components/ui/button";
import React from "react";
import { FaParachuteBox, FaWifi } from "react-icons/fa6";
import { RiParkingFill } from "react-icons/ri";

const Categories = () => {
  return (
    <div className=" flex items-center justify-between">
      <Button variant={"outline"} className="py-7  text-xl border-black ">
        <RiParkingFill className=" text-primary  mr-2 borbl" />
        Parking disponible
      </Button>
      <Button variant={"outline"} className="py-7  text-xl border-black">
        <FaWifi className=" text-primary  mr-2" />
        Wifi gratuit
      </Button>
      <Button variant={"outline"} className="py-7  text-xl border-black">
        <FaParachuteBox className=" text-primary  mr-2" />
        Balcon
      </Button>
      <Button variant={"outline"} className="py-7  text-xl border-black">
        <RiParkingFill className=" text-primary  mr-2" />
        Climatisation
      </Button>
      <Button variant={"outline"} className="py-7  text-xl border-black">
        <RiParkingFill className=" text-primary  mr-2" />
        Service de menage au quotidien
      </Button>
    </div>
  );
};

export default Categories;
