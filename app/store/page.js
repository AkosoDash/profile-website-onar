"use client";
import CarouselComponent from "../../components/carousel";
import CardStoreComponent from "../../components/card_store";
import NavbarBlackComponent from "../../components/navbar-black";
import HFullContainer from "../../components/HFullContainer";
import datas from "../../datas/marketplace.json";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Store() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [bannerDatas, setBannerDatas] = useState([]);

  const getBannerDatas = async () => {
    try {
      const response = await axios.get(
        "https://api.onarstreet.co.id/api/banner"
      );
      const datas = await response.data.data;
      setBannerDatas(datas);
      setIsLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBannerDatas();
  }, []);

  return (
    <>
      <NavbarBlackComponent />
      <HFullContainer>
        <div className="mt-24 px-4 max-md:mt-24 text-center flex items-center justify-center h-3/4">
          <CarouselComponent data={bannerDatas} isLoaded={isLoaded} />
        </div>
      </HFullContainer>
      <div className="container p-4 mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {datas.map((data, key) => {
          return (
            <CardStoreComponent
              key={key}
              uniqueKey={key}
              name={data.name}
              url_link={data.direct_url}
              img_link={data.image_url}
            />
          );
        })}
      </div>
    </>
  );
}
