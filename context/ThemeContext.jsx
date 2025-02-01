"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [mode, setMode] = useState(null);
  const [ loading, setLoading ] = useState(true)

  useEffect(()=>{
    const preference = localStorage.getItem("pref")
    if(preference){
      setMode(preference)
    }else{
      setMode("dark")
    }
    setLoading(false)
  }, [])

  const toggle = () => {
    setMode((prev) => (prev == "dark" ? "light" : "dark"));
    if (localStorage.getItem("pref") === "light") {
      localStorage.setItem("pref", "dark");
    } else {
      localStorage.setItem("pref", "light");
    }
  };

  if(loading){
    return null;
  }

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div
        className={`flex flex-col theme ${mode === "dark" ? "dark" : "light"}`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
