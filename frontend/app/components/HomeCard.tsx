"use client";

import { readDbAll } from "@lib/tableland";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { User } from "@common/types";

type Props = {
  id: string;
};

function HomeCard() {
  const [users, setUsers] = useState<User[]>([]);

  const getUserData = async () => {
    const userData: User[] = await readDbAll();
    if (userData) {
      setUsers(userData);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className="w-full flex justify-around flex-wrap">
        {users.map((user, index) => (
          <div key={index} className="basis-1/4 mt-10">
            <Link href={user.name} className="w-full justify-center">
              <Image
                src="/profile_image_tonyejang.png"
                width={250}
                height={250}
                alt="Next.js"
                className="w-full text-center"
              />
              <p className="text-center font-semibold">{user.name}</p>
              <p className="text-center">{user.profile}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeCard;
