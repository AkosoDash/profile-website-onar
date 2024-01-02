"use client";
import NavbarBlackComponent from "../../components/navbar-black";
import MainContainer from "../../components/mainContainer";
import HFullContainer from "../../components/HFullContainer";
import CarouselCeritaKami from "../../components/CarouselCeritaKami";
import datas from "../../datas/navigation.json";
import data_produk from "../../datas/data-sandal.json";
import data_produk_2 from "../../datas/data-sepatu-olahraga.json";
import data_produk_3 from "../../datas/data-sepatu-anak.json";
import data_produk_4 from "../../datas/data-sepatu-sneakers.json";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavbarBlackComponent />
      <HFullContainer bgColor={"white"}>
        <div className="flex flex-col justify-around items-center md:px-8 lg:px-8 mt-20">
          <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-8 w-full px-6 ">
            <div className="mb-8 col-span-2 pt-10">
              <h1 className="text-black text-4xl font-black uppercase antialiased text-center max-sm:text-lg ">
                Sandal
              </h1>
            </div>
            <div className="mb-8 col-span-4 pt-10">
              <span className="text-xl text-black mt-20 text-left w-full pt-10 md:w-1/2 mb-8 md:text-lg max-sm:text-xs">
                Sandal kami merupakan simbol keseimbangan sempurna antara
                kenyamanan, gaya, dan inovasi desain. Dibuat dengan standar
                kualitas tertinggi, setiap pasang sandal menggabungkan bahan
                pilihan dengan perakitan teliti, menciptakan produk yang awet,
                kuat, dan tahan lama. Desain yang inovatif tidak hanya praktis
                namun juga estetis, memastikan Anda tampil trendi tanpa
                mengorbankan kenyamanan. Tersedia dalam berbagai warna cerah dan
                pola modis, sandal kami tidak hanya menjadi alas kaki
                fungsional, tetapi juga pernyataan gaya yang memancarkan energi
                positif. Dirancang khusus untuk mendukung gaya hidup aktif,
                sandal kami ringan, kokoh, dan siap menemani setiap langkah
                dalam setiap perjalanan Anda. Selain itu, kami berkomitmen pada
                keberlanjutan dengan menggunakan bahan ramah lingkungan dan
                proses produksi yang berkelanjutan. Pilihlah sandal kami untuk
                pengalaman berjalan yang luar biasa, di mana kenyamanan dan gaya
                bertemu dalam harmoni sempurna.{" "}
              </span>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </HFullContainer>
      <HFullContainer>
        <div className="carousel carousel-center">
          {data_produk.map((data, key) => {
            return (
              <CarouselCeritaKami
                key={key}
                uniqueKey={key}
                name={data.name}
                img_link={data.image_url}
              />
            );
          })}
        </div>
      </HFullContainer>
      <HFullContainer bgColor={"white"}>
        <div className="flex flex-col justify-around items-center md:px-8 lg:px-8">
          <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-8 w-full px-6 ">
            <div className="mb-8 col-span-2 pt-10">
              <h1 className="text-black text-4xl font-black uppercase antialiased text-center max-sm:text-lg ">
                Sepatu Olahraga
              </h1>
            </div>
            <div className="mb-8 col-span-4 pt-10">
              <span className="text-xl text-black mt-20 text-left w-full pt-10 md:w-1/2 mb-8 md:text-lg max-sm:text-xs">
                Sepatu olahraga kami merepresentasikan perpaduan yang sempurna
                antara performa unggul dan gaya yang menawan. Dirancang khusus
                untuk berbagai jenis olahraga, dari badminton dan voli hingga
                basket dan lari, setiap pasang sepatu mengusung standar kualitas
                tinggi. Inovasi desain memastikan kenyamanan optimal dan
                dukungan yang diperlukan selama aktivitas fisik intensif.
                Bahan-bahan teknologi tinggi digunakan untuk memastikan ringan
                dan kokohnya sepatu, memberikan Anda keunggulan di lapangan.
                Tersedia dalam berbagai pilihan gaya, warna, dan desain yang
                mencerminkan keberagaman dan dinamika setiap olahraga. Dengan
                fokus pada performa tinggi, sepatu ini menjadi mitra setia untuk
                setiap atlet yang mengejar prestasi dan gaya dalam setiap
                langkahnya. Pilih sepatu olahraga kami, dan hadapi setiap
                tantangan dengan keyakinan dan gaya yang tak tertandingi.{" "}
              </span>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </HFullContainer>
      <HFullContainer>
        <div className="carousel carousel-center">
          {data_produk_2.map((data, key) => {
            return (
              <CarouselCeritaKami
                uniqueKey={key}
                key={key}
                name={data.name}
                img_link={data.image_url}
              />
            );
          })}
        </div>
      </HFullContainer>
      <HFullContainer bgColor={"white"}>
        <div className="flex flex-col justify-around items-center md:px-8 lg:px-8">
          <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-8 w-full px-6 ">
            <div className="mb-8 col-span-2 pt-10">
              <h1 className="text-black text-4xl font-black uppercase antialiased text-center max-sm:text-lg ">
                Sepatu Anak-anak
              </h1>
            </div>
            <div className="mb-8 col-span-4 pt-10">
              <span className="text-xl text-black mt-20 text-left w-full pt-10 md:w-1/2 mb-8 md:text-lg max-sm:text-xs">
                Sepatu anak-anak kami adalah teman setia dalam petualangan kecil
                mereka sehari-hari. Dirancang dengan cermat untuk memenuhi
                kebutuhan tumbuh kembang kaki yang aktif, setiap pasang sepatu
                mengusung kenyamanan, keamanan, dan keceriaan. Bahan-bahan yang
                ramah anak, ringan, dan mudah dipakai memastikan pengalaman
                berjalan yang menyenangkan dan bebas hambatan. Desain yang ceria
                dan warna-warna yang menarik mencerminkan kepolosan dan
                keceriaan anak-anak. Dengan berbagai karakter lucu dan motif
                yang menyenangkan, sepatu kami tidak hanya memberikan dukungan
                fisik, tetapi juga membangkitkan imajinasi serta kreativitas si
                kecil. Keamanan adalah prioritas utama kami, dengan sol yang
                anti-slip untuk menjaga langkahnya tetap mantap. Sepatu
                anak-anak kami tidak hanya menjadikan berjalan lebih
                menyenangkan, tetapi juga memupuk rasa percaya diri mereka saat
                menjelajahi dunia di sekitarnya. Pilih sepatu anak-anak kami
                untuk memberikan mereka pengalaman berjalan yang ceria dan
                nyaman, sambil mengekspresikan kepribadian dan kegembiraan
                mereka melalui langkah-langkah kecil.
              </span>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </HFullContainer>
      <HFullContainer>
        <div className="carousel carousel-center">
          {data_produk_3.map((data, key) => {
            return (
              <CarouselCeritaKami
                uniqueKey={key}
                name={data.name}
                key={key}
                img_link={data.image_url}
              />
            );
          })}
        </div>
      </HFullContainer>
      <HFullContainer bgColor={"white"}>
        <div className="flex flex-col justify-around items-center md:px-8 lg:px-8">
          <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-8 w-full px-6 ">
            <div className="mb-8 col-span-2 pt-10">
              <h1 className="text-black text-4xl font-black uppercase antialiased text-center max-sm:text-lg ">
                Sneakers
              </h1>
            </div>
            <div className="mb-8 col-span-4 pt-10">
              <span className="text-xl text-black mt-20 text-left w-full pt-10 md:w-1/2 mb-8 md:text-lg max-sm:text-xs">
                Sneakers kami adalah perwujudan gaya santai yang trendi dan
                kenyamanan luar biasa. Didesain untuk memenuhi kebutuhan gaya
                hidup modern, sepatu kami menghadirkan kombinasi sempurna antara
                desain yang stylish dan performa yang optimal. Dengan beragam
                model, mulai dari tampilan yang kasual hingga gaya yang lebih
                urban, setiap pasang sneakers kami menghadirkan sentuhan
                individualitas pada setiap langkah Anda. Dibuat dengan
                bahan-bahan berkualitas tinggi, sepatu ini memberikan pengalaman
                berjalan yang ringan dan nyaman sepanjang hari. Warna-warna
                pilihan dan desain yang modern menjadikan sneakers kami aksesori
                fashion yang cocok untuk berbagai kesempatan. Fleksibilitas dan
                daya tahan membuatnya ideal untuk gaya hidup yang dinamis. Tidak
                hanya sekadar alas kaki, sneakers kami adalah manifestasi dari
                ekspresi diri dan keinginan untuk tetap bergaya tanpa
                mengorbankan kenyamanan. Pilih sneakers kami, dan berikan
                sentuhan fashion yang segar pada setiap langkah petualangan
                Anda.
              </span>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </HFullContainer>
      <HFullContainer>
        <div className="carousel carousel-center">
          {data_produk_4.map((data, key) => {
            return (
              <CarouselCeritaKami
                key={key}
                uniqueKey={key}
                name={data.name}
                img_link={data.image_url}
              />
            );
          })}
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
