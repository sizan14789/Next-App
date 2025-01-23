import Image from "next/image";
import { notFound } from "next/navigation";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
};

export async function generateMetadata({params}){
  const post = await getData(params.id)
  return{
    title: post.title,
    description: post.description
  }
}

const Post = async ({ params }) => {
  const data = await getData(params.id);
  const { id, title, description, img, username, content } = data;

  return (
    <section className="my-auto">
      <div className="wrapper">
        <div className="">
          <div className="mb-10 flex gap-10 ">
            <div className="flex gap-8 flex-col flex-1 justify-center">
              <h2 className="text-4xl font-bold"> {title} </h2>
              <p> {description} </p>
              <div className="flex gap-4">
                <figure className="relative h-12 aspect-square rounded-full overflow-hidden">
                  <Image
                    src={img}
                    fill={true}
                    alt="author"
                    className="object-cover"
                  />
                </figure>
                <p className="flex items-center"> {username} </p>
              </div>
            </div>
            <figure className="relative h-80 w-full flex-1 flex items-center">
              <Image
                fill={true}
                src={img}
                alt="blog-lamamia"
                className="self-center object-cover"
              />
            </figure>
          </div>
          <p>
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Post;
