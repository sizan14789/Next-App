import Image from "next/image";
import { roboto } from "../layout";
import { Button } from "@/components/button/button";

export const metadata = {
  title: "Contact",
  description: "Contact page",
};

const Contact = () => {
  return (
    <section className="my-auto">
      <div className="wrapper">
        <h2 className={`${roboto.className} text-center text-7xl mb-10 lg:mb-24`}>
          Let's keep in touch
        </h2>
        <div className="lg:grid lg:grid-cols-2 gap-16 h-box">
          <div className="w-full lg:flex justify-center contactImage hidden">
            <figure className="relative aspect-square mx-auto ">
              <Image
                src="/contact.png"
                fill={true}
                alt="contact"
                className="animate-contact"
              />
            </figure>
          </div>
          <form className="flex flex-col gap-6 max-w-96  mx-auto lg:mx-0 justify-center">
            <input
              className="p-4 border-2 rounded-md bg-transparent placeholder:text-gray-400 "
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="p-4 border-2 rounded-md bg-transparent placeholder:text-gray-400 "
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              className="p-4 border-2 rounded-md bg-transparent placeholder:text-gray-400 "
              type="text"
              rows="5"
              placeholder="Message"
              required
            />
            <Button name={"Send"} url={"/contact"} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
