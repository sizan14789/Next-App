import { Button } from "@/components/button/button";
import Image from "next/image";

export const metadata = {
  title: "About",
  description: "About page",
};

const About = () => {
  return (
    <section className="my-auto">
      <div className="wrapper">
        <figure className="mb-10 h-72 w-full relative">
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg"
            fill={true}
            alt="about"
            className="object-cover grayscale"
          />
          <div className="absolute bottom-6 left-6 bg-buttonPrimary py-2 px-4">
            <h2 className="font-bold text-white text-2xl">
              Digital Storytellers
            </h2>
            <p className="font-bold text-white">
              Handcrafting award winning digital experience
            </p>
          </div>
        </figure>

        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-bold">Who are we?</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              rem nesciunt assumenda animi aspernatur sit facere architecto
              provident repellendus eligendi <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              architecto veniam culpa odit quae, voluptatibus laudantium
              recusandae, officia libero eveniet unde nostrum suscipit,
              voluptatum fuga at hic illo quibusdam doloribus?
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
              reiciendis. Iure fugit deleniti sint odio, maiores quia amet
              provident illum quo beatae. Fugit vero delectus hic saepe quos?
              Animi, impedit.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-bold">What we do?</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              rem nesciunt assumenda animi aspernatur sit facere architecto
              provident repellendus eligendi pariatur vero, ducimus temporibus
              modi et maxime excepturi? Expedita, asperiores. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit.
              <br />
              <br />
              - Creative illustration
              <br />
              <br />
              - Creative illustration
              <br />
              <br />- Creative illustration
            </p>
            <Button url={"/About"} name={"Contact"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
