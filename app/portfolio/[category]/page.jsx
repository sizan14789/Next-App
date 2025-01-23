import { Button } from "@/components/button/button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];
  console.log(data);

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <>
      <p className="capitalize text-3xl text-buttonPrimary font-bold mt-3">
        {params.category}
      </p>

      {/* Flex reverse based on nth of type, odd even */}

      {data.map(({desc, id, image, title, url}) => {
        return (
          <div className={`${id % 2==0? 'flex-row-reverse' : ''} flex mt-12 mb-24 h-box gap-10`} key={id}>
            <div className="flex flex-col gap-8 self-center flex-1">
              <h2 className="text-5xl font-bold">{title}</h2>
              <p>
                {desc}
              </p>
              <Button name={"See More"} url={ url || "#"} />
            </div>
            <figure className="relative flex-1 rounded-sm overflow-hidden">
              <Image
                src={image}
                fill={true}
                alt="illustrations"
                className="object-cover"
              />
            </figure>
          </div>
        );
      })}
    </>
  );
};

export default Category;
