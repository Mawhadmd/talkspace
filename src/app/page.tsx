"use client";
import Link from "next/link";
import { useActionState, useState } from "react";
import { handlejoin } from "./lib/Action";
export type ResponseStateType = { response: string | null };
export default function Home() {
  const [id, setid] = useState<string>("");
  const initialstate: ResponseStateType = { response: null };
  const [state, formAction, ispending] = useActionState(
    handlejoin,
    initialstate
  );
  // FIXME : Add a form to join a room, fix overload error and server action
  return (
    <>
      <div className="text-mainTextColor Poppins">
        <h1 className="text-5xl mb-4">
          Connect With Others Around <br />
          The World
        </h1>
        <form action={formAction} className="flex items-center">
          <input
            value={id}
            name="id"
            onChange={(e) => setid(e.target.value)}
            placeholder="Room ID"
            className="mr-4 border-black border-[1px] border-solid outline-accentColor rounded-lg w-60 h-14 p-2"
            type="text"
          />
          <input
            type="submit"
            value={ispending ? "Joining..." : "Join"}
            className="text-3xl rounded-full bg-secondAccent text-primaryColor p-3 hover:bg-secondAccent/50 hover:text-secTextColor transition-all"
          />
        </form>

        {state.response && (
          <p className="text-black">Room Found, Asking Permission...</p>
        )}
      </div>
    </>
  );
}
