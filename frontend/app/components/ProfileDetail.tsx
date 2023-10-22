"use client";

import Image from "next/image";


function ProfileDetail() {
  return (
    <>
    {/* ここにdbからName、ProfileImage、whatdoyoudo、twitterlink、githublink、sociallink、discrioptionをいれる */}
    <div className="flex justify-between mt-10 ">
        <div className="pl-10">
            <Image src="/profile_image_tonyejang.png"
            width={500}
            height={500}
            alt="Next.js"
            />
        </div>
        <div className="pl-10">
            <div className="text-3xl font-bold mb-3">tonyejang</div>
            <div className="text-1xl font-bold mb-3">a contributor of MEV ecosystem in L2</div>
            <div className="flex  mt-10">
                <a href="https://twitter.com/infocollecter" className="mr-10">
                    <Image src="/twittericon.png" width={30} height={30} alt="twittericon"/>
                </a>
                <a href="https://github.com/zkyuki" className="mr-10">
                    <Image src="/githubicon.png" width={30} height={30} alt="githubicon"/>
                </a>
                <a href="https://mirror.xyz">
                    <Image src="/mirroricon.png" width={30} height={30} alt="mirroricon"/>
                </a>
            </div>
                
            <div className="mt-10 max-w-2/10">I've been contributing to an open-source project called MEV-Boom for the past six months to address the L2 MEV issues that arose after the introduction of the shared sequencer. I'm also actively working to boost the MEV ecosystem in Korea. I organized the MEV Korea 2023 event and distribute a Korean-language newsletter titled 'MEV Monthly News'. I'd be grateful if someone involved in MEV could support and mentor me.</div>
        </div>
    </div>
    </>
  )
}

export default ProfileDetail