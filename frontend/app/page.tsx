import Image from "next/image";
import Link from "next/link";
import HomeCard from "./components/HomeCard";

export default function Page() {
  return (
<<<<<<< HEAD
    <>
=======
  <>
<<<<<<< HEAD
>>>>>>> 5eb9cf762d02f78707aee114431840995c91f9d0
=======
>>>>>>> 5eb9cf762d02f78707aee114431840995c91f9d0
      <header className="flex justify-between">
        <Link href="/">
          <Image
            src="/PatronStaking.png"
            width={300}
            height={300}
            alt="PatronStaking"
            className="p-8"
          />
        </Link>
        <div className="text-right  p-5">
          <button className="px-2 py-1 bg-white-400 text-lg text-black font-semibold rounded-full hover:bg-white-500 border border-{black}">
            <Link href="login">Log in</Link>
          </button>
          <button className="px-2 py-1 bg-green-400 text-lg text-black font-semibold rounded-full hover:bg-green-500">
            <Link href="signup">Get Started</Link>
          </button>
        </div>
      </header>
      <main>
<<<<<<< HEAD

<<<<<<< HEAD
      <h1 className="text-5xl text-center font-bold">
        A contributor is worth patroning
      </h1>
      <div className="m-5 text-3xl text-center">
        A OSS contributor, Ecosystem contributor and researcher can do their
        activities from a long-term perspective with their patron
      </div>

      <Link href="tonyejang" className="flex justify-between flex-wrap">
        {/* ここにProfileImageとName + "is" + profile をdbから引っ張ってくる*/}
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </Link>
    </>
  );
=======
=======

>>>>>>> 5eb9cf762d02f78707aee114431840995c91f9d0
        <h1 className="text-5xl text-center font-bold">A contributor is worth patroning</h1>
        <div className="m-5 text-3xl text-center">A OSS contributor, Ecosystem contributor and researcher can do their activities from a long-term perspective with their patron</div>
        
        <Link href="tonyejang" className="flex justify-between flex-wrap">
          {/* ここにProfileImageとName + "is" + whatdoyoudo をdbから引っ張ってくる*/}
          <HomeCard/>
          <HomeCard/>
          <HomeCard/>
          <HomeCard/>

          </Link>
      </main>
 </>
  )
>>>>>>> 5eb9cf762d02f78707aee114431840995c91f9d0
}
