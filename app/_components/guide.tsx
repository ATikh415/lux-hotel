import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

const Guide = () => {
  return (
    <div>
      <h1 className=" text-4xl text-primary font-bold">Guide de Voyage</h1>
      <div className=" flex items-center justify-between text-xl py-4">
        <span className=" text-neutral-500">
          Approfondissez Vos Connaissances Sur Le Sénégal
        </span>
        <div className=" flex items-center gap-2 text-primary ">
          <span>Voir plus </span>
          <FiArrowRightCircle />
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-10">
        <img
          src={"/img/img1.jpg"}
          className="  object-contain  rounded-xl  "
          alt=""
        />
        <img
          src={"/img/img4.jpg"}
          className="  object-contain  rounded-xl  "
          alt=""
        />
        <img
          src={"/img/img3.jpg"}
          className="  object-contain  rounded-xl  "
          alt=""
        />
      </div>
    </div>
  );
};

export default Guide;
