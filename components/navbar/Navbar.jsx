"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { links } from "@/app/json/navlinks";
import DarkLight from "../dark mode toggle/DarkLight";
import { signOut, useSession } from "next-auth/react";
import { VscThreeBars } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import { ThemeContext } from "@/context/ThemeContext";

const Navbar = () => {
  const session = useSession()
  const [ closed, isClosed ] = useState(true)
  const { mode } = useContext(ThemeContext)


  return (
    <section className="p-8">
      <nav className="wrapper flex justify-end items-center">
        <Link href="/" className="mr-auto text-3xl font-thin">
          Sizblog
        </Link>
        <div className={`lg:flex-row gap-8 lg:p-0 lg:h-auto lg:w-auto lg:translate-x-0 lg:bg-transparent fixed lg:relative items-center top-0 right-0 flex flex-col pt-28 w-1/3 min-w-60 z-10 h-screen ${mode=== "light" ? 'bg-white': 'bg-black'} ${closed? "closed" : "open"} `} >
          <div className={`${closed? "opacity-0" : "inline-block"} text-4xl hover:text-buttonPrimary cursor-pointer lg:hidden`} onClick={()=>isClosed(!closed)} >
            <RxCross2 />
          </div>
          <DarkLight />
          {links.map(({ id, title, url }) => {
            return (
              <Link href={url} key={id}>
                {title}
              </Link>
            );
          })}
          {session.status==="authenticated"?
            <button
            onClick={signOut}
            className={`bg-buttonPrimary text-white px-4 py-2 rounded-sm active:brightness-90`}
          >
            Logout
          </button>:
          <></>
          }
        </div>
        <div className="text-3xl hover:text-buttonPrimary cursor-pointer lg:hidden" onClick={()=> isClosed(!closed)} >
          <VscThreeBars />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
