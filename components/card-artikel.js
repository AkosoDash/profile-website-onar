import Image from "next/image";
import Link from "next/link";

const CardArtikelComponent = ({ data, isLoaded }) => {
  return (
    <>
      {data.length === 0 && isLoaded === false
        ? "Data sedang dimuat"
        : data.map((data, key) => {
            console.log(JSON.stringify(data));
            return (
              <div className="mb-8" key={key}>
                <div
                  className="card card-compact w-full bg-base-100 shadow-xl"
                  key={key}
                  id={`item${++key}`}
                >
                  <figure>
                    <div className="bg-white object-cover h-48 w-96">
                      <Image
                        src={data.file_gambar}
                        alt="Shoes"
                        width={480}
                        height={240}
                        priority
                      />
                    </div>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-white">{data.judul}</h2>
                    <p className="line-clamp-3 text-white">{data.isi}</p>
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
              </div>
            );
          })}
    </>
  );
};

export default CardArtikelComponent;
