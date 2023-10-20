"use client";

import Image from "next/image";


function ProfileDetail() {
  return (
    <>
    {/* ここにdbからName、ProfileImage、whatdoyoudo、twitterlink、githublink、sociallink、discrioptionをいれる */}
    <div className="flex justify-between">
        <div>
            <Image src="/profile_image_tonyejang.png"
            width={250}
            height={250}
            alt="Next.js"
            />
        </div>
        <div>
            <div>tonyejang</div>
            <div>a contributor of MEV ecosystem in L2</div>
            <a href="https://twitter.com/infocollecter">twittericon</a>
            <a href="https://github.com/zkyuki">githubicon</a>
            <a href="https://mirror.xyz">mirroricon</a>
            <div>I`m one of the contributor of the first MEV protection in Optimism, MEV-burst brabrabrra</div>
        </div>
    </div>
    </>
  )
}

export default ProfileDetail