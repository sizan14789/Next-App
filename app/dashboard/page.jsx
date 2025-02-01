"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const Dashboard = () => {
  const session = useSession();
  const fetcher = (...arg) => fetch(...arg).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts/create", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id)=>{
    await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    })
    mutate()
  }

  const router = useRouter();

  if (isLoading) {
    return(
      <section className="my-auto">
        <div className="wrapper" >
          <h2 className="text-6xl text-center">Loading...</h2>
        </div>
      </section>
    )
  }

  if(session.status === "loading"){
    return(
      <section className="my-auto">
        <div className="wrapper" >
          <h2 className="text-6xl text-center">Loading...</h2>
        </div>
      </section>
    )
  }

  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <section className="my-auto">
        <div className="wrapper grid md:grid-cols-2 gap-16">
          <div className="my-12">
            {data &&
              data.map(({ _id, title, description, img }) => {
                return (
                  <div key={_id} className="grid grid-cols-2 my-5 md:my-10 gap-5 md:gap-10">
                    <div className="overflow-hidden">
                      <figure className="relative w-full h-full overflow-hidden flex">
                        <Image
                          fill={true}
                          src={img}
                          alt={title}
                          className="object-cover max-h-36 md:max-h-none m-auto"
                        />
                      </figure>
                    </div>
                    <div className="py-10 flex flex-col gap-5 ">
                      <h2 className="3xl font-bold">{title}</h2>
                      <button className="bg-red-700 px-4 py-2 text-white text-xs font-bold rounded-md self-start active:brightness-90 ml-auto"
                      onClick={()=> handleDelete(_id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="my-12">
            <h2 className="text-4xl text-center mb-8">Create a new post</h2>
            <form
              className="flex mb-5 flex-col gap-7 max-w-96 mx-auto"
              onSubmit={handleCreateSubmit}
            >
              <input
                className="bg-transparent px-7 py-4 rounded-md border-wh border-2 focus:outline-none"
                type="text"
                required
                placeholder="title"
              />
              <input
                className="bg-transparent px-7 py-4 rounded-md border-wh border-2 focus:outline-none"
                type="text"
                required
                placeholder="description"
              />
              <input
                className="bg-transparent px-7 py-4 rounded-md border-wh border-2 focus:outline-none"
                type="text"
                required
                placeholder="img link"
              />
              <textarea
                className="bg-transparent px-7 py-4 rounded-md border-wh border-2 focus:outline-none"
                type="text"
                required
                placeholder="content"
                rows={5}
              ></textarea>
              <button className="bg-buttonPrimary px-8 py-6 text-white font-bold rounded-md self-start active:brightness-90" type="submit">
                Create
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
};

export default Dashboard;
