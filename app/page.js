"use client";
import NavbarComponent from "../components/navbar";
import MainContainer from "../components/mainContainer";
import HFullContainer from "../components/HFullContainer";
import CardHomeArtikelComponent from "../components/card-home-artikel";
import datas from "../datas/navigation.json";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const marketPlaceData = datas.find((data) => data.nav_role === "marketplace");

  const getArtikelDatas = async () => {
    try {
      const response = await axios.get("https://api.onarstreet.co.id/api/blog");
      const data = response.data.data;
      setArtikelDatas(data);
      setIsLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  const [isLoaded, setIsLoaded] = useState(false);
  const [artikelDatas, setArtikelDatas] = useState([]);
  const [artikelSelected, setArtikelSelected] = useState(0);
  const artikelShow = artikelDatas[artikelSelected];

  useEffect(() => {
    getArtikelDatas();
  }, []);
  return (
    <>
      <NavbarComponent />
      <MainContainer bgColor={"dark"}>
        <div
          className="hero min-h-screen"
          style={{ backgroundImage: "url(/assets/images/hero/hero-1.jpg)" }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Elegan, Nyaman, Berkualitas
              </h1>
              <p className="mb-5">
                Selamat datang di Onar Street, tempatnya gaya dan kenyamanan.
                Temukan koleksi terbaik kami yang menggabungkan desain modern
                dengan kualitas tinggi. Setiap langkah Anda adalah pernyataan
                fashion yang tak terlupakan. Jelajahi sekarang untuk menemukan
                gaya sejati Anda.
              </p>
              <Link href={marketPlaceData.direct_url}>
                <h4 className="btn btn-black">Belanja Sekarang!</h4>
              </Link>
            </div>
          </div>
        </div>
      </MainContainer>
      <HFullContainer bgColor={"white"}>
        <div className="flex flex-col justify-around items-center md:px-8 lg:px-8">
          <h1 className="text-black text-4xl font-black uppercase antialiased text-center mb-4 md:text-4xl mt-10">
            Penjualan Terbaik
          </h1>
          <span className="text-xl text-black text-center w-full md:w-1/2 mb-8 md:px-6 md:text-sm">
            Berikut merupakan beberapa produk terlaris kami.
          </span>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-6 ">
            {/* Produk 1 */}
            <div className="mb-8">
              <div className="rounded-xl overflow-hidden">
                <div className="w-full h-full lg:h-full md:h-96 rounded-xl shadow-2xl object-cover relative">
                  <Image
                    src="/assets/images/shoes/sandal-pria-1.jpeg"
                    alt="Foto Sandal Pria"
                    width={480}
                    height={480}
                  />
                </div>
              </div>
              <div className="h-20 bg-white w-full flex flex-col justify-center items-center text-center shadow-2xl rounded-xl mt-4 px-1 pb-2 pt-4">
                <h1 className="text-black font-black lg:text-lg md:text-sm sm:text-sm">
                  Sandal Slide Slop Pria - Hitam{" "}
                </h1>
                <h3 className="text-black">Rp. 88.500,-</h3>
              </div>
            </div>

            {/* Produk 2 */}
            <div className="mb-8">
              <div className="rounded-xl overflow-hidden">
                <div className="w-full h-full lg:h-full md:h-96 rounded-xl shadow-2xl object-cover relative">
                  <Image
                    src="/assets/images/shoes/sepatu-anak-2.jpeg"
                    alt="Foto Sandal Anak"
                    width={480}
                    height={480}
                  />
                </div>
              </div>
              <div className="h-20 bg-white w-full flex flex-col justify-center items-center text-center shadow-2xl rounded-xl mt-4 px-1 pb-2 pt-4">
                <h1 className="text-black font-black lg:text-lg md:text-sm sm:text-sm">
                  Sepatu Anak-Anak Perempuan
                </h1>
                <h3 className="text-black">Rp. 84.500,-</h3>
              </div>
            </div>

            {/* Produk 3 */}
            <div className="mb-8">
              <div className="rounded-xl overflow-hidden">
                <div className="w-full h-full lg:h-full md:h-96 rounded-xl shadow-2xl object-cover relative">
                  <Image
                    src="/assets/images/shoes/sepatu-olahraga-2.jpeg"
                    alt="Foto Sepatu Olahraga"
                    width={480}
                    height={480}
                  />
                </div>
              </div>
              <div className="h-20 bg-white w-full flex flex-col justify-center items-center text-center shadow-2xl rounded-xl mt-4 px-1 pb-2 pt-4">
                <h1 className="text-black font-black lg:text-lg md:text-sm sm:text-sm">
                  Sepatu Voli Wanita
                </h1>
                <h3 className="text-black">Rp. 118.500,-</h3>
              </div>
            </div>

            {/* Produk 3 */}
            <div className="mb-8">
              <div className="rounded-xl overflow-hidden">
                <div className="w-full h-full lg:h-full md:h-96 rounded-xl shadow-2xl object-cover relative">
                  <Image
                    src="/assets/images/shoes/sepatu-olahraga-4.jpeg"
                    alt="Foto Sandal Anak"
                    width={480}
                    height={480}
                  />
                </div>
              </div>
              <div className="h-20 bg-white w-full flex flex-col justify-center items-center text-center shadow-2xl rounded-xl mt-4 px-1 pb-2 pt-4">
                <h1 className="text-black font-black lg:text-lg md:text-sm sm:text-sm">
                  Sepatu Voli Wanita
                </h1>
                <h3 className="text-black md:text-xs">Rp. 118.500,-</h3>
              </div>
            </div>
          </div>
        </div>
      </HFullContainer>

      <HFullContainer bgColor={"dark"}>
        <div className="flex flex-col justify-around items-center md:px-0 lg:px-0">
          <h1 className="text-white text-4xl font-black uppercase antialiased text-center mb-4 md:text-4xl mt-10">
            Artikel Lainnya
          </h1>
          <div className="grid gap-4 grid-cols-1 mt-4 w-full place-content-center items-center justify-center">
            <div>
              {artikelDatas.length === 0 && !isLoaded ? (
                "Data sedang dimuat"
              ) : (
                <div
                  className="card lg:card-side bg-base-100 shadow-xl lg:mx-40 md:mx-8 max-sm:mx-8 max-md:mx-8"
                  id={`item${artikelSelected + 1}`}
                >
                  <figure className="lg:w-[800px] lg:h-[480] bg-white">
                    <Image
                      src={artikelShow.file_gambar}
                      alt="album"
                      height={960}
                      width={960}
                    />
                  </figure>
                  <div className="card-body w-full">
                    <h2 className="card-title font-bold lg:text-4xl md:text-3xl sm:text-xl">
                      {artikelShow.judul}
                    </h2>
                    <p className="max-md:text-sm overflow-hidden line-clamp-5 max-md:line-clamp-3 lg:my-9 md:my-4 sm:my-2">
                      {artikelShow.isi}
                    </p>
                    <div className="card-actions justify-end lg:mt-10">
                      <Link
                        href={{
                          pathname: `/artikel/${artikelShow.id}`,
                        }}
                      >
                        <button className="btn btn-neutral">
                          Baca Selengkapnya
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="w-screen flex flex-row items-center justify-center mt-8 mb-8">
              {artikelDatas.map((data, key) => (
                <button
                  key={key}
                  onClick={() => setArtikelSelected(key)}
                  className={
                    artikelSelected === key
                      ? "mx-2 px-4 py-2 rounded-md text-black font-semibold bg-white duration-200"
                      : "mx-2 px-4 py-2 rounded-md text-white font-semibold duration-200"
                  }
                >
                  {key + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </HFullContainer>
      <HFullContainer>
        <footer className="footer items-center p-4 bg-black text-neutral-content">
          <aside className="items-center grid-flow-col">
            <div className="rounded-xl w-8 relative">
              <Image
                src="/assets/logo/logo-black-2.png"
                alt="ok"
                width={32}
                height={32}
              />
            </div>
            <div className="ml-2 w-16 hidden block lg:block md:block relative">
              <Image
                src="/assets/logo/logo-with-text.png"
                alt="ok"
                width={48}
                height={48}
              />
            </div>
            <p className="ml-2">Copyright © 2023 - All right reserved</p>
          </aside>
          <nav className="grid-flow-col gap-4 max-md:place-self-center max-lg:justify-self-end lg:justify-self-end max-sm:place-self-center">
            <Link
              href={
                "https://www.instagram.com/onar_street/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
              }
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </Link>
            <Link
              href={"https://www.tiktok.com/@onar_street?_t=8hxllrWXS4I&_r=1"}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-tiktok"
                viewBox="0 0 16 16"
              >
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
              </svg>
            </Link>
          </nav>
        </footer>
      </HFullContainer>
    </>
  );
}
