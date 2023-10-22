"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { readDb } from "@/lib/tableland";
import { User } from "@common/types";

function ProfileDetail() {
  const pathname = usePathname();
  const [name, setName] = useState<string>("");
  const [icon, setIcon] = useState<string>("");
  const [profile, setProfile] = useState<string>("");
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [socialLink, setSocialLink] = useState<string>("");

  const getUserData = async (path: string) => {
    const userData: User = await readDb(path);
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
    const path = pathname.replace("/", "");
    getUserData(path);
  }, [pathname]);

  return (
    <div className="flex justify-between">
      <div>
        <Image
          src="/profile_image_tonyejang.png"
          width={250}
          height={250}
          alt="Next.js"
        />
      </div>
      <div className="pl-10">
        <div className="text-3xl font-bold mb-3">{name}</div>
        <div className="text-1xl font-bold mb-3">
          {description}
        </div>
        <div className="flex  mt-10">
          <a href="https://twitter.com/infocollecter" className="mr-10">
            <Image
              src="/twittericon.png"
              width={30}
              height={30}
              alt="twittericon"
            />
          </a>
          <a href="https://github.com/zkyuki" className="mr-10">
            <Image
              src="/githubicon.png"
              width={30}
              height={30}
              alt="githubicon"
            />
          </a>
          <a href="https://mirror.xyz">
            <Image
              src="/mirroricon.png"
              width={30}
              height={30}
              alt="mirroricon"
            />
          </a>
        </div>
      </div>

      {/* <div className="mt-10 pr-5">
          {description}
      </div> */}
    </div>
  );
}

export default ProfileDetail;
