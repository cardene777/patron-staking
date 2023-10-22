import { ethers } from "hardhat";
import { Signer } from "ethers";
import { expect } from "chai";
import { PatronMock } from "../types";

describe("Patron Contract", function () {
  let patronContract: PatronMock;
  let owner: Signer;
  let addr1: Signer;
  let addr2: Signer;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    patronContract = (await ethers.deployContract("PatronMock")) as PatronMock;
    await patronContract.waitForDeployment();
  });

  it("should allow a patron to stake and update stake info", async function () {
    // Perform a stake operation
    const amountToStake = ethers.parseEther("1.0");
    await patronContract
      .connect(addr1)
      .stake(addr2.getAddress(), amountToStake);

    // Check if the stake information is updated correctly
    const [patronAmount, stakedAmount] = await patronContract.getCreatorInfo(
      addr2.getAddress()
    );
    expect(patronAmount).to.equal(1);
    expect(stakedAmount).to.equal(amountToStake);
  });

  it("should allow a patron to withdrawNonSig stake and update stake info", async function () {
      // Perform a stake operation
      const amountToStake = ethers.parseEther("1.0");
    await patronContract
      .connect(addr1)
      .stake(addr2.getAddress(), amountToStake, {
        value: amountToStake,
      });

    // Perform a withdrawNonSig stake operation
    await patronContract
      .connect(addr1)
      .withdrawStakeNonSig(addr2.getAddress(), amountToStake);

    // Check if the stake information is updated correctly
    const [patronAmount, stakedAmount] = await patronContract.getCreatorInfo(
      addr2.getAddress()
    );
    expect(patronAmount).to.equal(0);
    expect(stakedAmount).to.equal(0);
  });

  it("should allow a creator to withdrawNonSig funds and update receiveAmount", async function () {
    // Perform a stake operation by a patron
    const amountToStake = ethers.parseEther("1.0");
    const amountToReceive = ethers.parseEther("0.5");
    await patronContract
      .connect(addr1)
      .stake(addr2.getAddress(), amountToStake, {
        value: amountToStake,
      });

    // Patron withdraws stake
    await patronContract
      .connect(addr1)
        .withdrawStakeNonSig(addr2.getAddress(), amountToStake);


      await patronContract
        .connect(addr1)
        .stake(addr2.getAddress(), amountToStake, {
          value: amountToStake,
        });

      await patronContract
        .connect(addr1)
        .updateReceiveAmount(addr2.getAddress(), amountToStake, {
          value: amountToReceive,
        });
    // Creator withdraws funds
      const initialBalance = await ethers.provider.getBalance(addr2.getAddress());
      console.log(`initialBalance: ${initialBalance}`);
    await patronContract.connect(addr2).withdrawNonSig(amountToReceive);
      const finalBalance = await ethers.provider.getBalance(addr2.getAddress());
      console.log(`finalBalance: ${finalBalance}`);

    // Check if the receiveAmount is updated correctly and funds are transferred
    const [patronAmount, stakedAmount, receiveAmount] =
      await patronContract.getCreatorInfo(addr2.getAddress());
    expect(receiveAmount).to.equal(amountToReceive);
    expect(finalBalance - initialBalance).to.be.closeTo(
      amountToReceive,
      ethers.parseEther("0.1")
    );
  });

  it("should not allow a patron to withdrawNonSig more than their stake", async function () {
    // Perform a stake operation
    const amountToStake = ethers.parseEther("1.0");
    await patronContract
      .connect(addr1)
      .stake(addr1.getAddress(), amountToStake);

    // Attempt to withdrawNonSig more stake than staked
    const invalidWithdrawAmount = ethers.parseEther("2.0");
    await expect(
      patronContract
        .connect(addr1)
        .withdrawStakeNonSig(addr1.getAddress(), invalidWithdrawAmount)
    ).to.be.revertedWith("Withdrawal amount exceeds stake amount.");
  });

  // Add more test cases for other functions and error conditions
});
