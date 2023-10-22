<<<<<<< HEAD
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { writeDb } from "@lib/tableland"
import { User } from "@/common/types";
=======
"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

>>>>>>> 5eb9cf762d02f78707aee114431840995c91f9d0

const supabase = createClientComponentClient()

async function signInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',       
    })
  }
  async function signInWithTwitter() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'twitter',
    })
  }
  

const supabase = createClientComponentClient()

async function signInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',       
    })
  }
  async function signInWithTwitter() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'twitter',
    })
  }
  

export default function Page() {
<<<<<<< HEAD
=======

  const supabase = createClientComponentClient();

<<<<<<< HEAD
>>>>>>> 5eb9cf762d02f78707aee114431840995c91f9d0
=======
>>>>>>> 5eb9cf762d02f78707aee114431840995c91f9d0
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profile, setProfile] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [description, setDescription] = useState("");
  const [socialLink, setSocialLink] = useState("");

  const onChangeName = (e: any) => {
    setName(e.target.value);
  };

  const onChangeProfileImage = (e: any) => {
    setProfileImage(e.target.value);
  };

  const onChangeProfile = (e: any) => {
    setProfile(e.target.value);
  };

  const onChangeWalletAddress = (e: any) => {
    setWalletAddress(e.target.value);
  };

  const onChangeDescription = (e: any) => {
    setDescription(e.target.value);
  };

  const onChangeSocialLink = (e: any) => {
    setSocialLink(e.target.value);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (
      name &&
      profileImage &&
      profile &&
      walletAddress &&
      description &&
      socialLink
    ) {
      const userObj = {
        name,
        icon: profileImage,
        profile,
        walletAddress,
        description,
        socialLink,
      };
      const userData: User[] = await writeDb(userObj);
      if (userData) {
        setName("");
        setProfileImage("");
        setProfile("");
        setWalletAddress("");
        setDescription("");
        setSocialLink("");
        setIsSubmitted(true);
      }
    }
  };
  return (
    <>
      <header className="flex justify-between">
        <Link href="/">
          <Image
            src="/PatronStaking.png"
            width={300}
            height={300}
            alt="PatronStaking"
            className="p-8"
          />
        </Link>
        <div className="text-right  p-5">
          <button className="px-2 py-1 bg-white-400 text-lg text-black font-semibold rounded-full hover:bg-white-500 border border-{black}">
            <Link href="login">Log in</Link>
          </button>
          <button className="px-2 py-1 bg-green-400 text-lg text-black font-semibold rounded-full hover:bg-green-500">
            <Link href="signup">Get Started</Link>
          </button>
        </div>
<<<<<<< HEAD
      </header>
=======
    </header>
    <button onClick={signInWithGithub}>Github auth</button>
    <button onClick={signInWithTwitter}>Twitter auth</button>
    <main>
      <div className="mt-40 mx-20">
        <div className="flex justify-center mt-32 mx-10 mb-10">
          <form className="w-full max-w-2xl" onSubmit={onSubmit}>
            <p className="text-2xl text-black font-bold text-center mb-5">
              Make your profile!
            </p>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-last-name"
                >
                  Name
                  <text className="text-red  font-normal text-sm ml-2 p-0.5 rounded-md">
                    *
                  </text>
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  defaultValue=""
                  placeholder="James Camelon"
                  onChange={onChangeName}
                />
              </div>
            </div>
            
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-last-name"
                >
                  Image
                  <text className="text-red  font-normal text-sm ml-2 p-0.5 rounded-md">
                    *
                  </text>
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  type="file"
                  name="example"
                  accept="image/jpeg, image/png"
                  defaultValue=""
                  onChange={onChangeProfileImage}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-first-name"
                >
                  What do you do in 1 sentence
                  <text className="text-red  font-normal text-sm ml-2 p-0.5 rounded-md">
                    *
                  </text>
                </label>
              </div>
>>>>>>> 5eb9cf762d02f78707aee114431840995c91f9d0

      <main>
        <div className="mt-40 mx-20">
          <div className="flex justify-center mt-32 mx-10 mb-10">
            <form className="w-full max-w-2xl" onSubmit={onSubmit}>
              <p className="text-2xl text-black font-bold text-center mb-5">
                Make your profile!
              </p>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-last-name"
                  >
                    name
                    <text className="text-red  font-normal text-sm ml-2 p-0.5 rounded-md">
                      *
                    </text>
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    defaultValue=""
                    placeholder="James Camelon"
                    onChange={onChangeName}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-last-name"
                  >
                    Image
                    <text className="text-red  font-normal text-sm ml-2 p-0.5 rounded-md">
                      *
                    </text>
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    type="file"
                    name="example"
                    accept="image/jpeg, image/png"
                    defaultValue=""
                    onChange={onChangeProfileImage}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-first-name"
                  >
                    What do you do in 1 sentence
                    <text className="text-red  font-normal text-sm ml-2 p-0.5 rounded-md">
                      *
                    </text>
                  </label>
                </div>

                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    defaultValue=""
                    placeholder="an ambassador of Avalanche Japan from 3 years ago"
                    onChange={onChangeProfile}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-first-name"
                  >
                    What is your wallet address
                    <text className="text-red  font-normal text-sm ml-2 p-0.5 rounded-md">
                      *
                    </text>
                  </label>
                </div>

                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    defaultValue=""
                    placeholder="0x3d7863e87AFD6cc4bB584c3d07f5D1EaA6D26822"
                    onChange={onChangeWalletAddress}
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4">
                    description
                    <text className="text-red  font-normal text-sm ml-2 p-0.5 rounded-md">
                      *
                    </text>
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    defaultValue=""
                    placeholder="I onboard developers to Avalanche Network as a Avalanche Japan member. I held Japanese Avalanche networking event and technical workshop this January and April. In addition, I posts 'Avalanch News' thread every week from 3 years ago."
                    onChange={onChangeDescription}
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Any social link
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    defaultValue=""
                    onChange={onChangeSocialLink}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                {isSubmitted ? (
                  <div>
                    <p className="text-green-500 text-lg text-bold">
                      Completed!
                    </p>
                  </div>
                ) : (
                  <button
                    className={
                      "py-3 lg:py-3 px-14 lg:px-14 text-white-500 font-bold rounded-3xl bg-blue-400 hover:shadow-teal-md transition-all outline-none text-white"
                    }
                    type="submit"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
