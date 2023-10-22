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
      <div className="flex justify-between">
        <div>
          <Image
            src="/profile_image_tonyejang.png"
            width={250}
            height={250}
            alt="Next.js"
          />
        </div>
        <div>
          <div>{name}</div>
          <div>{profile}</div>
          <a href="https://twitter.com/infocollecter">twittericon</a>
          <a href="https://github.com/zkyuki">githubicon</a>
          <a href="https://mirror.xyz">mirroricon</a>
          <div>
            {description}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileDetail;
