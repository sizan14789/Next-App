'use client'

import { notFound } from "next/navigation"
import { useEffect, useState } from "react"
import useSWR from "swr"

const Dashboard = () => {

  // const [ data, setData ] = useState()
  // const [ isLoading, setIsLoading ] = useState(false)
  // const [ error, setError ] = useState(false)

  // useEffect(()=>{
  //   const getData = async ()=>{
  //     setIsLoading(true)
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  //     if(!res.ok) setError(true)
  //     const data = await res.json()
  //     setData(data);
  //     setIsLoading(false)
  //   }
  //   getData()
  // }, [])

  // console.log(data)

  const fetcher = (...arg)=> fetch(...arg).then( res => res.json())
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  console.log(data)

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard