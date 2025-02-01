"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const session = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };

  if (session.status === "loading") {
    return <section className="my-auto">
      <div className="wrapper">
        <h2 className="text-7xl text-center" >Loading...</h2>
      </div>
    </section>;
  }

  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  if (session.status === "unauthenticated") {
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
              Log in
            </button>
          </form>
          <p className="text-center mb-4">or</p>
          <div className="flex flex-col gap-4">
            <button onClick={() => signIn("google")} className="mx-auto">
              Sign in with Google
            </button>
            <Link className="mx-auto" href="/dashboard/register">
              Create a new account
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
