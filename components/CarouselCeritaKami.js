import Image from "next/image";

const CarouselCeritaKami = ({ children, uniqueKey, name, img_link, key }) => {
  return (
    <>
      <div className="carousel-item">
        <div className="w-96">
          <Image src={img_link} alt={key} width={400} height={400} />
        </div>
      </div>
    </>
  );
};

export default CarouselCeritaKami;
