import Image from "next/image";

const CarouselComponent = ({ data, isLoaded }) => {
  return (
    <>
      <div className="card w-full h-1/2 bg-base-100 shadow-xl lg:w-1/2 lg:content-center">
        <div className="carousel w-full h-1/4">
          {data.length === 0 && isLoaded === false
            ? "Data sedang dimuat"
            : data.map((item, index) => (
                <div
                  key={index}
                  id={`item${index + 1}`}
                  className="carousel-item card w-full h-full relative"
                >
                  <a href={item.link} className="block w-full h-full">
                    <div className="card object-cover w-full h-full">
                      <Image
                        src={item.file_gambar}
                        alt={`Carousel Image ${index + 1}`}
                        layout="responsive"
                        width={1920}
                        height={1080}
                      />
                    </div>
                  </a>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default CarouselComponent;
