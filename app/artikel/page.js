"use client";
import CardArtikelComponent from "../../components/card-artikel";
import NavbarBlackComponent from "../../components/navbar-black";
import HFullContainer from "@/components/HFullContainer";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Store() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [artikelDatas, setArtikelDatas] = useState([]);

  const getArtikelDatas = async () => {
    try {
      const response = await axios.get("https://api.onarstreet.co.id/api/blog");
      const datas = await response.data.data;
      setArtikelDatas(datas);
      setIsLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getArtikelDatas();
  }, [isLoaded]);
  return (
    <>
      <NavbarBlackComponent />
      <HFullContainer bgColor={"#fff"}>
        <div className="flex w-screen flex-col justify-around items-center pt-32 mb-0 bg-white">
          <h1 className="text-black text-6xl font-black uppercase antialiased text-center mb-4 max-md:text-4xl max-sm:text-4xl mb-20">
            Artikel Kami
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-6 max-sm:grid-cols-1">
            <CardArtikelComponent data={artikelDatas} isLoaded={isLoaded} />
          </div>
        </div>
      </HFullContainer>
    </>
  );
}
