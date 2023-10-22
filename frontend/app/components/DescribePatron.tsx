"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function DescribePatron() {
  return (
    <>
        <div className="border-2  mt-10 mr-20 pt-5 px-10">
            <div className="flex justify-center">For every $1,000 in staking, you can donate $40 per year</div>
            <div className="flex justify-center pb-10">
                <ConnectButton />
            </div>
            {/* このボタンでBe a patron機能をする */}
            <button className="flex justify-center bg-red-400 text-lg text-black font-semibold rounded-full hover:bg-white-500 border border-{black}">Be a Patron</button>
            
            {/* このTonyEjangの部分を、dbからuser名をいれる */}
            <div className="flex justify-center text-2xl font-bold pb-10">🏆Access for the group chat with Tony Ejang and patrons</div>       
            <div className="flex justify-center text-2xl font-bold pb-10">🧪 Early access to beta versions</div>
            <div className="flex justify-center text-2xl font-bold pb-10">✉️ Get exclusive members-only substack posts</div>
        </div>
    </>
  )
}

export default DescribePatron
