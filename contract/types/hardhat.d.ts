/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IPatron",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPatron__factory>;
    getContractFactory(
      name: "PatronMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PatronMock__factory>;
    getContractFactory(
      name: "Patron",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Patron__factory>;
    getContractFactory(
      name: "VerifySignature",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VerifySignature__factory>;

    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IPatron",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IPatron>;
    getContractAt(
      name: "PatronMock",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.PatronMock>;
    getContractAt(
      name: "Patron",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Patron>;
    getContractAt(
      name: "VerifySignature",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.VerifySignature>;

    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "IPatron",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IPatron>;
    deployContract(
      name: "PatronMock",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PatronMock>;
    deployContract(
      name: "Patron",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Patron>;
    deployContract(
      name: "VerifySignature",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VerifySignature>;

    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "IPatron",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IPatron>;
    deployContract(
      name: "PatronMock",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PatronMock>;
    deployContract(
      name: "Patron",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Patron>;
    deployContract(
      name: "VerifySignature",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VerifySignature>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
