import Image from "next/image";
import Navbar from "./_components/navbar";
import Banner from "./_components/banner";
import Hotel from "./_components/hotel";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <main className=" px-32 py-20">
        <Hotel />
      </main>
      <Footer />
    </>
  );
}
