"use client";

import NavbarBlackComponent from "../../../components/navbar-black";
import { useEffect, useState } from "react";
import Link from "next/link";
import HFullContainer from "@/components/HFullContainer";
import axios from "axios";
import Image from "next/image";

export default function Detail({ params }) {
  const [articlePage, setArticlePage] = useState({});
  const [allArticles, setAllArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const getArtikel = async () => {
    try {
      const response = await axios.get(
        `https://api.onarstreet.co.id/api/blog/${params.id}`
      );
      setArticlePage(response.data.data);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllArticles = async () => {
    try {
      const response = await axios.get("https://api.onarstreet.co.id/api/blog");
      const idArticles = [];
      for (let i = 0; i < response.data.data.length; i++) {
        idArticles.push(response.data.data[i].id);
      }
      const paramsId = params.id;
      const currentArticle = idArticles.indexOf(parseInt(paramsId));
      const articleShow = [];
      if (currentArticle === 0) {
        articleShow.push(response.data.data[currentArticle + 1]);
        articleShow.push(response.data.data[currentArticle + 2]);
      } else if (currentArticle === response.data.data.length - 1) {
        articleShow.push(response.data.data[currentArticle - 1]);
        articleShow.push(response.data.data[currentArticle - 2]);
      } else {
        articleShow.push(response.data.data[currentArticle - 1]);
        articleShow.push(response.data.data[currentArticle + 1]);
      }
      setAllArticles(articleShow);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArtikel();
    getAllArticles();
  }, []);

  if (isLoaded === true && articlePage.created_at) {
    const articleDate = articlePage.created_at;
    const stringDate = articleDate.toString();
    const dateSplitted = stringDate.split("T");
    const dateOnly = dateSplitted[0].split("-");
    const dateFormatted = `${dateOnly[2]}-${dateOnly[1]}-${dateOnly[0]}`;
    return (
      <>
        <NavbarBlackComponent />
        <HFullContainer bgColor={"white"}>
          <div className="flex w-screen flex-col justify-around items-center mt-32 mb-0">
            <h1 className="text-black text-4xl font-black uppercase antialiased text-center">
              {articlePage.judul}
            </h1>
            <span className=" text-md text-neutral-400 mt-4 text-center w-1/2">
              Diunggah pada tanggal : {dateFormatted}
            </span>
            <div className="flex flex-row justify-center gap-24 items-center w-screen">
              <div className=" rounded-xl flex flex-col items-center justify-around p-8">
                <Image
                  className="rounded-xl shadow-2xl bg-dark"
                  src={`https://api.onarstreet.co.id/storage/blog/${articlePage.file_gambar}`}
                  alt="Foto Sandal Pria"
                  width={512}
                  height={512}
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </HFullContainer>
        <div className="static p-10">
          <p>{articlePage.isi}</p>
        </div>

        <HFullContainer>
          <div className="flex flex-col justify-around items-center md:px-8 lg:px-8">
            <h1 className="text-black text-4xl font-black uppercase antialiased text-center mb-4 md:text-4xl mt-10">
              Artikel Lainnya
            </h1>
            <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
              {allArticles.map((data, key) => {
                if (data == undefined) {
                  return;
                } else {
                  return (
                    <div
                      className="card lg:card-side bg-base-100 shadow-xl m-8 flex flex-col"
                      key={key}
                    >
                      <figure className="lg:w-[512px] bg-white">
                        <Image
                          src={`${data.file_gambar}`}
                          alt="Album"
                          width={512}
                          height={512}
                        />
                      </figure>
                      <div className="card-body w-full">
                        <h2 className="card-title truncate ...">
                          {data.judul}
                        </h2>
                        <p className="line-clamp-5">{data.isi}</p>
                        <div className="card-actions justify-end">
                          <Link
                            href={{
                              pathname: `/artikel/${data.id}`,
                              // query: { id: String(data.id) },
                            }}
                            className="px-4 py-2 bg-white rounded-lg text-black font-bold"
                          >
                            Baca selengkapnya
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
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
  } else {
    return (
      <div className="w-full h-screen flex bg-white justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
}
