import Link from "next/link"

export const Button = ({name, url})=>{
  return(
    <button className="bg-buttonPrimary px-8 py-6 text-white font-bold rounded-md self-start active:brightness-90" ><Link href={url}> {name} </Link> </button>
  )
}