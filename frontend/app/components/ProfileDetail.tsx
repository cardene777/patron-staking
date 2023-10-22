"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { readDb } from "@/lib/tableland";
import { User } from "@common/types"

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
        <div className="ml-4">
          <p className="font-semibold text-xl">Name: {name}</p>
          <p className="text-lg">{profile}</p>
          <p>
            <Link href="https://twitter.com/infocollecter">twittericon</Link>
          </p>
          <p>
            <Link href="https://github.com/zkyuki">githubicon</Link>
          </p>
          <p>
            <Link href="https://mirror.xyz">mirroricon</Link>
          </p>
          <p className="text-lg">description: {description}</p>
        </div>
      </div>
  );
}

export default ProfileDetail;
