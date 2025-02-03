import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Blog",
  description: "Blog page"
};

const getData = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/posts`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    console.log("wrong")
    return notFound();
  }
  return res.json();
};

const Blog = async () => {
  const data = await getData();

  return (
    <section className="my-auto">
      <div className="wrapper">
        {data.map(({ _id, title, description, img }) => {
          return (
            <Link
              href={`/blog/${_id}`}
              className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 md:my-10 overflow-hidden"
              key={_id}
            >
              <div className="lg:col-start-1 lg:col-end-2">
                <figure className="relative w-full h-full ">
                  <Image
                    src={img}
                    fill={true}
                    alt="blog-lamamia"
                    className="object-cover self-center w-full max-h-32 min-h-36 max-w-72 md:max-h-none ml-auto"
                  />
                </figure>
              </div>
              <div className="flex flex-col gap-4 lg:gap-8 lg:col-start-2 lg:col-end-4 justify-center py-8 md:py-12">
                <h2 className="font-bold text-2xl lg:text-4xl">{title}</h2>
                <p> {description} </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
