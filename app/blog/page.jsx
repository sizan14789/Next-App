import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Blog",
  description: "Blog page",
};

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts",{
    cache: "no-cache"
  });

  if(!res.ok){
    return notFound()
  }

  return res.json();
};

const Blog = async () => {
  const data = await getData();

  return (
    <section className="my-auto">
      <div className="wrapper">
      {data.map(({_id, title, description, img })=>{
        return <Link href={`/blog/${_id}`} className="flex gap-14 m-10" key={_id}>
          <figure className="relative w-full max-w-80 min-w-80 min-h-48 flex">
            <Image
              src={img}
              fill={true}
              alt="blog-lamamia"
              className="self-center object-cover max-h-52"
            />
          </figure>
          <div className="flex flex-col gap-8 justify-center">
            <h2 className="font-bold text-4xl">{title}</h2>
            <p> {description} </p>
          </div>
        </Link>
      })}
      </div>
    </section>
  );
};


export default Blog;
