import Image from 'next/image'
import React from 'react'
import { images } from '@/app/json/social'
import Link from 'next/link'

const Footer = () => {
  return (
    <section className='bottom-0 p-8' >
      <footer className='wrapper flex justify-between'>
        <div>&#169; 2025 Sizan, All rights reserved.</div>
        <div className='flex gap-3' >
          {images.map(({id, name, src, category})=>{
            if(category === "social-media")
            return <Link className='' key={id} href='#' >
              <Image src={src} width={20} height={20} alt={name} />
            </Link>
          })}
        </div>
      </footer>
    </section>
  )
}

export default Footer