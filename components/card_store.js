import Image from "next/image";

const CardStoreComponent = ({ uniqueKey, name, url_link, img_link }) => {
  return (
    <div className="card bg-base-100 shadow-xl p-5">
      <a key={uniqueKey} href={`https://${url_link}`} target="_blank">
        <div className="rounded-xl">
          <Image src={img_link} alt={name} width={400} height={400} />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl max-md:text-lg">{name}</h2>
        </div>
      </a>
    </div>
  );
};

export default CardStoreComponent;
