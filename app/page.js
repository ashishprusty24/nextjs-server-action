"use client";

import User from "@/component/User";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  const [email, setEmail] = useState("");
  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signIn("credentials", {
        email: email,
        redirect: false,
        callbackUrl: "/",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center flex-col">
        {/* <div className="w-1/2 mx-auto">
          <button
            onClick={signIn}
            className="px-6 py-4 bg-red-500 rounded text-white"
          >
            Login
          </button>
        </div> */}

        <form onSubmit={handlerSubmit} className="w-1/2 mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-4 bg-red-500 rounded text-white"
          >
            Login
          </button>
        </form>
        {(session?.user?.email || session?.user?.name) && <User />}
        {/* <User /> */}
      </div>
    </>
  );
}
