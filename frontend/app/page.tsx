
import Link from 'next/link'
import Image from 'next/image'
import HomeCard from './components/HomeCard'


export default function Page() {
  return (
  <>
      <header className="flex justify-between">
        <Link href="/">
          <Image src="/PatronStaking.png" width={300} height={300} alt="PatronStaking" className="p-8"/>
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

        <h1 className="text-5xl text-center font-bold">A contributor is worth patroning</h1>
        <div className="m-5 text-3xl text-center">A OSS contributor, Ecosystem contributor and researcher can do their activities from a long-term perspective with their patron</div>
        
        
          {/* ここにProfileImageとName + "is" + whatdoyoudo をdbから引っ張ってくる*/}
          <div className="grid grid-cols-4 gap-4">
            <Link href="tonyejang" className="flex justify-between flex-wrap">
              <HomeCard/>
            </Link>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
          </div> 
          
      </main>
 </>
  )
}
