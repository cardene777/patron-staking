"use client";

import { User } from "@/common/types";
import { readDb } from "@/lib/tableland";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAccount, useConnect, useContractWrite } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import ABI from "@utils/PatronMock.json";
import { CONTRACT_ADDRESS } from "@config/config"

const abi = ABI.abi;
function DescribePatron() {
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const { write, writeAsync } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: "stake",
  });

  const [creatorName, setCreatorName] = useState<string>("");
  const [number, setNumber] = useState<number>(0);

  const pathname = usePathname();

  const getUserData = async (path: string) => {
    const userData: User = await readDb(path);
    if (userData) {
      setCreatorName(userData?.name);
    }
  }

  const handleInputChange = (e: any) => {
    const newValue = Number(e.target.value);
    if (!isNaN(newValue) && newValue >= 0) {
      setNumber(newValue);
    }
  };

  const stakePatron = async (to: string, amount: number) => {
    try {
      const amountInWei = BigInt(Math.floor(amount * 10 ** 18));;;
      write({
        args: [to, amountInWei],
        value: amountInWei,
      });
    } catch (err) {
      console.log(`err: ${err}`);
    }
  }

  useEffect(() => {
    if (!address) connect();
  }, [address, connect]);

  useEffect(() => {
    const path = pathname.replace("/", "");
    getUserData(path);
  }, [pathname]);

  return (
    <>
      <div className="border-2">
        <div className="flex justify-center">
          For every $1,000 in staking, you can donate $40 per year
        </div>
        <div className="flex justify-center my-2">
          <ConnectButton />
        </div>
        {/* このTonyEjangの部分を、dbからuser名をいれる */}
        <div className="flex justify-center">
          🏆Access for the group chat with&nbsp;
          <span className="font-bold">{creatorName}</span>&nbsp; and patrons
        </div>
        <div className="flex justify-center">
          🧪 Early access to beta versions
        </div>
        <div className="flex justify-center">
          ✉️ Get exclusive members-only substack posts
        </div>
        <div className="flex justify-center mt-2">
          <label htmlFor="numberInput">Stake Token (ETH):</label>
          <div className="input-container ml-2">
            <input
              type="number"
              id="numberInput"
              name="numberInput"
              value={number}
              onChange={handleInputChange}
              className="border-2"
            />
          </div>
        </div>
        <div className="flex justify-center my-2">
          {address && (
            <button className="font-semibold text-2xl border-4 py-1 px-8 rounded-lg border-indigo-500 bg-indigo-400 text-white" onClick={() => stakePatron(address, number)}>
              Stake
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default DescribePatron;
