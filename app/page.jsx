import Image from "next/image";
import Hero from '../public/hero.png'
import Link from "next/link";
import { roboto } from "./layout";

export default function Home() {
  return (
    <section className="my-10 md:my-auto">
      <div className="wrapper flex flex-col-reverse gap-5 md:grid md:grid-cols-2 xl:gap-20 overflow-hidden">
        <div className="flex flex-col gap-6 xl:gap-10 items-start pt-8">
          <h2 className={`${roboto.className} text-5xl lg:text-7xl font-Roboto font-bold bg-heading bg-clip-text text-transparent`}>
            Better design <br className="hidden md:block"/> for <br className="md:hidden"/> your digital products.
          </h2>
          <p>
            Turning your ideas into Reality.We Bring together the teams from the
            global tech industry.
          </p>
          <button className="bg-buttonPrimary p-4 text-white font-bold rounded-md active:brightness-90">
            <Link href="/portfolio" className="">
              See Our Works
            </Link>
          </button>
        </div>
        <figure className="xl:max-w-box" >
          <Image src={Hero} alt="hero" className=" animate-move sm:max-w-sm mx-auto"/>
        </figure>
      </div>
    </section>
  );
}


