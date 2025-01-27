'use client'

import { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{
  const [ mode, setMode ] = useState("dark")

  const toggle = ()=>{
    setMode(prev => prev== "dark" ? 'light' : 'dark')
  }

  return(
    <ThemeContext.Provider value={{toggle, mode}} >
      <div className={`flex flex-col theme ${mode === 'dark'? 'dark' : 'light' }`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
