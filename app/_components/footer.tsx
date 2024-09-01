import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className=" h-4 w-screen bg-primary"></div>
      <div className=" w-screen  bg-red-50 px-32">
        <div className=" grid grid-cols-4 py-12">
          <div>
            <div className=" flex flex-col gap-6 ">
              <div className="flex items-center text-2xl font-bold w-40 bg-white p-4">
                Okool<p className=" text-orange-500">Trip</p>
              </div>
              <div className=" flex items-center gap-6 ">
              <IoLogoFacebook className="w-6 h-6" />
              <FaXTwitter className="w-6 h-6" />
              <FaInstagram className="w-6 h-6"/>
              <FaWhatsapp className="w-6 h-6"/>

              </div>
              <span>+225 00 00 00 00 00</span>
              <span>+225 00 00 00 00 40</span>
              <span>adressinfo@gmail.com</span>
            </div>
          </div>

          <div className=" flex flex-col gap-4">
            <h2 className=" font-semibold">Menu</h2>
            <span >Accueil</span>
            <span>Agenda</span>
            <span>Billetterie</span>
            <span>Bon plan</span>
            <span>Loisirs</span>
            <span>Promoteurs</span>
            <span>Annonceurs</span>
          </div>

          <div className=" flex flex-col gap-4">
            <h2 className=" font-semibold">Contacts</h2>
            <span >FAGs</span>
            <span>Nous contacter</span>
            <span>Mention légales et CQG</span>
            <div className=" flex items-center gap-6 ">
              <IoLogoFacebook className="w-6 h-6" />
              <FaXTwitter className="w-6 h-6" />
              <FaInstagram className="w-6 h-6"/>
              <FaWhatsapp className="w-6 h-6"/>

              </div>
          </div>

          <div className=" flex flex-col gap-4">
            <h2 className=" font-semibold">Autres options</h2>
         
          </div>
        </div>
      </div>
      <div className=" px-32 py-14 flex items-center justify-between">
        <h1 className=" text-4xl text-primary font-bold">S'abonner a la newsletter</h1>
        <div className="flex w-full max-w-sm items-center">
      <Input className="p-6 " type="email" placeholder="Email adress" />
      <Button className=" p-6" type="submit">S'inscrire</Button>
    </div>
      </div>
    </>
  );
};

export default Footer;
