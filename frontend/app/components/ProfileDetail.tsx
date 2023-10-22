"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { readDb } from "@/lib/tableland";
import { User } from "@common/types";
import { Address, useAccount, useConnect, useSignMessage } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

function ProfileDetail() {
  const { isConnected, address } = useAccount();
  const { connect, connectAsync, error } = useConnect({
    connector: new InjectedConnector(),
  });

  const [name, setName] = useState<string>("")
  const [icon, setIcon] = useState<string>("")
  const [profile, setProfile] = useState<string>("")
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [socialLink, setSocialLink] = useState<string>("");

  const getUserData  = async (_walletAddress: string) => {
    const userData: User = await readDb(_walletAddress);
    if (userData) {
      setName(userData?.name);
      setIcon(userData?.icon);
      setProfile(userData?.profile);
      setWalletAddress(userData?.walletAddress);
      setDescription(userData?.description);
      setSocialLink(userData?.socialLink);
    }
  };

  useEffect(() => {
    if (address) getUserData(address);
  }, [address]);

  useEffect(() => {
    connect();
    if (address) {
      setWalletAddress(address as string);
    }
  }, [address, connect]);

  return (
    <>
    {/* ここにdbからName、ProfileImage、whatdoyoudo、twitterlink、githublink、sociallink、descrioptionをいれる */}
    <div className="flex justify-between mt-50 ">
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
                
            <div className="mt-10 pr-5">I've been contributing to an open-source project called MEV-Boom for the past six months to address the L2 MEV issues that arose after the introduction of the shared sequencer. I'm also actively working to boost the MEV ecosystem in Korea. I organized the MEV Korea 2023 event and distribute a Korean-language newsletter titled 'MEV Monthly News'. I'd be grateful if someone involved in MEV could support and mentor me.</div>
        </div>
      </div>
    </>
  );
}

export default ProfileDetail;
