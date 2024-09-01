"use client";

import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";



const Count = ({ title }: {title: string}) => {
  const [count, setCount] = useState(1);

  function decreaseHandler() {
    if(count > 1){

        setCount(count - 1);
    }
  }
  function increaseHandler() {
    setCount(count + 1);
  }

  return (
    <div className=" flex items-center gap-3">
      <div className=" text-xl text-neutral-100">{title}: </div>
      <div className="flex flex-col items-center justify-center ">
        <IoIosArrowUp
          onClick={increaseHandler}
          className=" w-6 h-6 text-white"
        />
        <div className=" bg-neutral-100 rounded-lg py-3 px-3 text-neutral-600 font-bold">
          {count}
        </div>
        <IoIosArrowDown
          onClick={decreaseHandler}
          className=" w-6 h-6 text-white"
        />
      </div>

      <div></div>
    </div>
  );
};

export default Count;
