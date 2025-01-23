import Image from "next/image";
import Hero from '../public/hero.png'
import Link from "next/link";
import { roboto } from "./layout";

export default function Home() {
  return (
    <section className="my-auto">
      <div className="wrapper grid grid-cols-2 gap-20 max-h-box overflow-hidden">
        <div className="flex flex-col gap-10 items-start pt-8">
          <h2 className={`${roboto.className} text-7xl font-Roboto font-bold bg-heading bg-clip-text text-transparent`}>
            Better design <br /> for your digital products.
          </h2>
          <p>
            Turning your ideas into Reality.We Bring together the teams from the
            global tech industry.
          </p>
          <button className="bg-buttonPrimary p-4 text-white font-bold rounded-md active:brightness-90">
            <Link href="/" className="">
              See Our Works
            </Link>
          </button>
        </div>
        <figure className="max-w-box flex" >
          <Image src={Hero} alt="hero" className="self-center w-full animate-move" />
        </figure>
      </div>
    </section>
  );
}


