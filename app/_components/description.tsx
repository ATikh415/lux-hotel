import Link from "next/link";
import React from "react";
import { GiWashingMachine } from "react-icons/gi";
import { IoWifi } from "react-icons/io5";
import { PiWheelchairLight } from "react-icons/pi";
import { RiParkingLine } from "react-icons/ri";

const Description = () => {
  return (
    <div className=" space-y-6 text-xl text-neutral-500">
      <h2 className=" text-2xl text-black">Description</h2>
      <p>
      Nichée au cœur d'une zone résidentielle paisible, cette somptueuse villa de quatre chambres offre l'équilibre parfait entre élégance et tranquillité pour des vacances inoubliables. Les vastes espaces de vie, baignés de
      lumière naturelle, créent une atmosphére chaleureuse et accueillante. La décoration raffinée allie modernité et charme méditerranéen, offrant un cadre luxueux pour se détendre.
      </p>
      <p>
      Les chambres spacieuses et élégantes offrent un confort absolu, avec des vues panoramiques sur le paysage
      environnant. Les sales ae pams somptueuses sont un sanctuaire ae preneure, tonais que la cuisme enteremen équipée invite à la préparation de délices culinaires.
      </p>
      <p>
      Le jardin luxuriant qui entoure la villa crée une oasis de sérénité, avec une piscine scintillante et des espaces exterieurs amenages pour les repas al tresco. La terrasse ontre une vue imprenadie sur les environs, laedie pour des soirées paisibles en plein air.
      </p>
    <p>
    pSituée à proximité de commodités locales et de plages idylliques, cette villa constitue le refuge parfait pour des
    vacances relaxantes. Que ce solt en ramille ou entre amis, chaque Instant passe aans cette villa de reve promet d'être empreint de calme et de sérénité, créant des souvenirs impérissables de vacances paisibles.
    </p>

    <div className=" flex items-center gap-8 ">
      <h2 className=" font-medium text-neutral-700">Type de chambre disponible:</h2>
      <Link href={"#"} className=" text-xl text-primary font-medium">Chambre Standard</Link>
      <Link href={"#"} className=" text-xl text-primary font-medium">Chambre double</Link>
      <Link href={"#"} className=" text-xl text-primary font-medium">Suite</Link>
    </div>
    <div className=" space-y-6 ">
      <h2 className=" text-xl font-bold text-black">Point forts:</h2>
      <div className=" flex flex-wrap items-center gap-8">
        <span className=" flex items-center gap-2 text-2xl">
          <RiParkingLine className=" w-8 h-8 text-primary" />
          Parking disponible
        </span>
        <span className=" flex items-center gap-2 text-2xl">
          <PiWheelchairLight className=" w-8 h-8 text-primary" />
          Equipement pour les personnes handicapées
        </span>
        <span className=" flex items-center gap-2 text-2xl">
          <GiWashingMachine className=" w-8 h-8 text-primary" />
          Service de menage au quotidien
        </span>
        <span className=" flex items-center gap-2 text-2xl">
          <IoWifi className=" w-8 h-8 text-primary" />
          Wifi gratuit
        </span>
      </div>
    </div>
    <div className=" space-y-6">
      <h2  className=" text-xl font-bold text-black">Environnement de l'hotel</h2>
      <p> Quelques lieux intéressants dans le voisinage immédiat</p>
     <div className=" flex items-center justify-between ">
     <div className=" flex flex-col items-start gap-6">
        <h2 className=" text-2xl font-medium text-black">Lieux connus à proximité</h2>
        <div className=" flex flex-col items-start gap-4">
        <div><span>Monument de la renaissance</span> <span>4.3km</span></div>
        <div><span>Monument de la renaissance</span> <span>4.3km</span></div>
        <div><span>Monument de la renaissance</span> <span>4.3km</span></div>
        <div><span>Monument de la renaissance</span> <span>4.3km</span></div>
        </div>
      </div>

      <div className=" flex flex-col items-start gap-6">
        <h2 className=" text-2xl font-medium text-black">Lieux connus à proximité</h2>
        <div className=" flex flex-col items-start justify-center gap-4">
        <div><span>Dibiterie Chez Abdou</span> <span>250</span></div>
        <div><span>Restaurant Ivoirien</span> <span>350m</span></div>
        <div><span>Restaurant Panamas</span> <span>800m</span></div>
        </div>
      </div>
      <div className=" flex flex-col items-start gap-6">
        <h2 className=" text-2xl font-medium text-black">Lieux connus à proximité</h2>
        <div className=" flex flex-col items-start gap-4">
        <div><span>Plage de Yoff</span> <span>2km</span></div>
        <div><span>Plage du virage</span> <span>4km</span></div>
        <div><span>Plage de Ouakam</span> <span>5km</span></div>
        </div>
      </div>
     </div>
    </div>
    </div>
  );
};

export default Description;
