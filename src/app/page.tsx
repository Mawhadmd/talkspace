import Link from "next/link";

export default function Home() {
  return (
    <>
   
        <div className="text-mainTextColor Poppins">
          <h1 className="text-5xl mb-4">Ready for a video chat?</h1>
          <div className="flex items-center">
            <input
              placeholder="Room ID"
              className="mr-4 border-black border-[1px] border-solid outline-accentColor rounded-lg w-60 h-14 p-2"
              type="text"
            />
            <button className="text-3xl rounded-full bg-secondAccent text-primaryColor p-3 hover:bg-secondAccent/50 hover:text-secTextColor transition-all">
              Enter
            </button>
          </div>
          <h2 className="text-5xl mt-10">No Invitation? No worries;</h2>
          <button className="mt-4 text-4xl bg-accentColor rounded-full p-4 px-10 hover:bg-secondAccent transition-all hover:text-secTextColor">
            Create Your own room
          </button>
        </div>
  
    </>
  );
}
