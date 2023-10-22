"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { writeDb } from "@lib/tableland"
import { User } from "@/common/types";
import { signInWithGithub, signInWithTwitter } from "@lib/supabase";

export default function Page() {

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
      </header>

      <main>
        <div className="mt-2 mx-2">
          <div className="flex justify-center mt-2 mx-10 mb-10">
            <form className="w-full max-w-2xl" onSubmit={onSubmit}>
              <p className="text-3xl text-black font-bold text-center mb-5">
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
                  <label
                    className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-first-name"
                  >
                    Social Login here
                    <text className="text-red  font-normal text-sm ml-2 p-0.5 rounded-md">
                      *
                    </text>
                  </label>
                </div>
                <button
                  type="button"
                  onClick={signInWithTwitter}
                  className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Sign in with Twitter
                </button>
                <button
                  type="button"
                  onClick={signInWithGithub}
                  className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Sign in with Github
                </button>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Description
                    <text className="text-red  font-normal text-sm ml-2 p-0.5 rounded-md">
                      *
                    </text>
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full h-40 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
