<<<<<<< HEAD:frontend/app/[name]/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import ProfileDetail from '@/components/ProfileDetail'
import DescribePatron from '@/components/DescribePatron'

=======
import DescribePatron from "@/components/DescribePatron";
import ProfileDetail from "@/components/ProfileDetail";
import Image from "next/image";
import Link from "next/link";
>>>>>>> origin/feature/20231020_frontend:frontend/app/[id]/page.tsx

export default function Page({ params }: { params: { name: string } }) {
  return (
<<<<<<< HEAD:frontend/app/[name]/page.tsx
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
      <div className='flex justify-between'>
        <ProfileDetail />
        <DescribePatron />
      </div>
    </main>
 </>
  )
=======
    <>
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
        <div className="flex justify-between">
          <ProfileDetail />
          <DescribePatron />
        </div>
      </main>
    </>
  );
>>>>>>> origin/feature/20231020_frontend:frontend/app/[id]/page.tsx
}
