"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';



export default function Page() {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const onChangeLastName = (e: any) => {
    setLastName(e.target.value);
  };

  const onChangeFirstName = (e: any) => {
    setFirstName(e.target.value);
  };

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangeTel = (e: any) => {
    setTel(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (lastName !== "" && firstName !== "" && email !== "" && tel !== "") {
      setIsSubmitted(true);
    }
  };
  return (
  <>
    <header class="flex justify-between">
        <Link href="/">
          <Image src="/PatronStaking.png" width={300} height={300} alt="PatronStaking" class="p-8"/>
        </Link>
        <div class="text-right  p-5">
          <button class="px-2 py-1 bg-white-400 text-lg text-black font-semibold rounded-full hover:bg-white-500 border border-{black}">
            <Link href="login">Log in</Link>
          </button>
          <button class="px-2 py-1 bg-green-400 text-lg text-black font-semibold rounded-full hover:bg-green-500">
            <Link href="signup">Get Started</Link>
          </button>
        </div>
    </header>
    
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
                  onChange={onChangeLastName}
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
                  onChange={onChangeFirstName}
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Discription
                  <text className="text-red  font-normal text-sm ml-2 p-0.5 rounded-md">
                    *
                  </text>
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="email"
                  value={email}
                  defaultValue=""
                  placeholder="I onboard developers to Avalanche Network as a Avalanche Japan member. I held Japanese Avalanche networking event and technical workshop this January and April. In addition, I posts 'Avalanch News' thread every week from 3 years ago."
                  onChange={onChangeEmail}
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
                  onChange={onChangeTel}
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
  )
}
