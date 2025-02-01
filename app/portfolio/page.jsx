import Image from "next/image";
import { images } from "../json/social";
import Link from "next/link";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio page",
};

const Portfolio = () => {
  return (
    <>
      <p className="text-2xl font-bold mb-7 mt-5 lg:mt-10">Choose a gallery</p>
      <div className="flex flex-col md:flex-row items-center gap-10">
        {images.map(({ category, id, src, name, url }) => {
          if (category === "portfolio") {
            return (
              <Link
                href={url}
                key={id}
                className="group cursor-pointer w-full max-w-72 h-96 relative border-4 rounded-sm "
              >
                <Image
                  src={src}
                  fill={true}
                  alt={name}
                  className="object-cover"
                />
                <h2 className="absolute bottom-4 right-4 font-bold text-2xl lg:text-4xl group-hover:text-buttonPrimary transition-colors">
                  {name}
                </h2>
              </Link>
            );
          }
        })}
      </div>
    </>
  );
};

export default Portfolio;
