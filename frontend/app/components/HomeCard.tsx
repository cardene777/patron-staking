"use client";

import Image from "@/node_modules/next/image";


function HomeCard() {
  return (
    <>
    {/* ここにdbからデータをいれる */}
        <div>
            <Image src="/profile_image_tonyejang.png"
            width={250}
            height={250}
            alt="Next.js"
            />
            <div>tonyejang is a contributor of MEV ecosystem in L2</div>
        </div>
    </>
  )
}

export default HomeCard