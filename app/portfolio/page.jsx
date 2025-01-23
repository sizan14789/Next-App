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
      <p className="text-2xl font-bold mb-5 mt-10">Choose a gallery</p>
      <div className="flex gap-10">
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
                <h2 className="absolute bottom-4 right-4 font-bold text-4xl group-hover:text-buttonPrimary transition-colors">
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
