
import Link from 'next/link'
import Image from 'next/image'
import HomeCard from './components/HomeCard'


export default function Page() {
  return (
  <>
        <header class="flex justify-between">
        <Link href="/">
          <Image src="/PatronStaking.png" width={300} height={300} alt="PatronStaking" class="p-8"/>
        </Link>
        <div class="text-right  p-5">
          <button class="px-2 py-1 bg-white-400 text-lg text-black font-semibold rounded-full hover:bg-white-500 border border-{black}">
            <Link href="login">Log in</Link>
          </button>
          <button class="px-2 py-1 bg-green-400 text-lg text-black font-semibold rounded-full hover:bg-green-500">
            <Link href="signup">Get Started</Link>
          </button>
  
        </div>
      </header>

      <h1 class="text-5xl text-center font-bold">A contributor is worth patroning</h1>
      <div class="m-5 text-3xl text-center">A OSS contributor, Ecosystem contributor and researcher can do their activities from a long-term perspective with their patron</div>
      
      <Link href="tonyejang" class="flex justify-between">
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>

        </Link>
      
 </>
  )
}
