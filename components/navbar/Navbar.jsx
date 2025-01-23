"use client";

import Link from "next/link";
import React from "react";
import { links } from "@/app/json/navlinks";
import DarkLight from "../dark mode toggle/DarkLight";

const Navbar = () => {
  return (
    <section className="p-8">
      <nav className="wrapper flex justify-end items-center">
        <Link href="/" className="mr-auto text-3xl font-thin">
          lamamia
        </Link>
        <div className="flex gap-8 items-center">
          <DarkLight />
          {links.map(({ id, title, url }) => {
            return (
              <Link href={url} key={id}>
                {title}
              </Link>
            );
          })}
          <button
            onClick={() => console.log("logged out")}
            className="bg-buttonPrimary text-white px-4 py-2 rounded-sm active:brightness-90"
          >
            Logout
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
