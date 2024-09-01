"use client"

import React from "react";
import Favorite from "./favorite";
import { CiLocationOn } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { CarouselSize } from "./carousel";
import Categories from "./categories";
import Description from "./description";
import Guide from "./guide";
import Form from "./book";

const Hotel = () => {
  return (
    <div className=" space-y-6">
      {/* Head hotel */}
      <div className=" flex items-center justify-between">
        <div className=" flex flex-col gap-4">
          <h1 className=" text-2xl font-bold">Lux Hotel</h1>
          <div className=" flex items-center gap-6">
            <Favorite />
            <div className=" flex items-center gap-1">
              <CiLocationOn className=" w-6 h-6 text-primary" />
              <span className="font-light text-neutral-500">
                Sacre-Coeur, Rue VDN 434, 40273, Dakar, Senegal
              </span>
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-4">
          <FaHeart className=" w-10 h-10 text-primary" />
          <IoMdShare className=" w-8 h-8 text-primary" />
          <span className=" text-lg text-neutral-700">Nuitée</span>
          <span className=" bg-primary text-white text-xl rounded-md p-4">
            Prix: 75.500 F CFA
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4  ">
        <div className="col-span-2 ">
            <img src="/img/house.jpg" className="object-cover h-full w-full " alt="" />
        </div>
        <div className=" bg-primary rounded-xl">
          <Form />
        </div>
      </div>
     
        <CarouselSize />
        <Favorite />
        <Categories />
        <Description />
        <Guide />
    </div>
  );
};

export default Hotel;
