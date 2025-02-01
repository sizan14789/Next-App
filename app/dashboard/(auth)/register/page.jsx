'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const [err, setErr] = useState(false)
  
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      })
      res.status === 201 && router.push('/dashboard/login?success=Account has been created')
    } catch (error) {
      setErr(true)
    }

  }

  return (
    <section className="my-auto">
      <div className="wrapper">
        <form
          className="flex mb-5 flex-col gap-7 max-w-96 mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            className="bg-transparent px-7 py-4 rounded-md border-wh border-2 focus:outline-none"
            required
            placeholder="username"
            type="text"
          />
          <input
            className="bg-transparent px-7 py-4 rounded-md border-wh border-2 focus:outline-none"
            required
            placeholder="email"
            type="email"
          />
          <input
            className="bg-transparent px-7 py-4 rounded-md border-wh border-2 focus:outline-none"
            required
            placeholder="password"
            type="password"
          />
          <button className="bg-buttonPrimary py-3 text-white font-bold rounded-md active:brightness-90">
            Register
          </button>
        </form>
        <Link href="/dashboard/login" className="text-center block">
          Login with an existing account
        </Link>
      </div>
    </section>
  );
};

export default Register;
