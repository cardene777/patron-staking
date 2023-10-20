"use client";
import { ConnectButton } from '@rainbow-me/rainbowkit'


function DiscribePatron() {
  return (
    <>
        <div className="border-2">
            <div className="flex justify-center">For every $1,000 in staking, you can donate $40 per year</div>
            <div className="flex justify-center">
                <ConnectButton />
            </div>
            {/* このTonyEjangの部分を、dbからuser名をいれる */}
            <div className="flex justify-center">🏆Access for the group chat with Tony Ejang and patrons</div>       
            <div className="flex justify-center">🧪 Early access to beta versions</div>
            <div className="flex justify-center">✉️ Get exclusive members-only substack posts</div>
        </div>
    </>
  )
}

export default DiscribePatron