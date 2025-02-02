import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from "react"

const DarkLight = () => {
  const { toggle, mode } = useContext(ThemeContext)
  
  return (
    <div className="border-2 relative items-center px-0.5 border-buttonSecondary rounded-3xl flex cursor-pointer" onClick={toggle}>
      <div className="flex-1 ">🌙</div>
      <div className="flex-1 ">☀️</div>
      <div className={`absolute h-5 w-5 bg-buttonPrimary rounded-round transition-all ${mode == 'dark' ? '' : 'translate-x-lightDark' }`} />
    </div>
  )
}

export default DarkLight