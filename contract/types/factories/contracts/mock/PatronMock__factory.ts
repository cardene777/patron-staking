/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  PatronMock,
  PatronMockInterface,
} from "../../../contracts/mock/PatronMock";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Stake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawStake",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "getCreatorInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "address",
        name: "patron",
        type: "address",
      },
    ],
    name: "getCreatorPatronStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_messageHash",
        type: "bytes32",
      },
    ],
    name: "getEthSignedMessageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "getMessageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "patron",
        type: "address",
      },
    ],
    name: "getPatronInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "patron",
        type: "address",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "getPatronStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_ethSignedMessageHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "recoverSigner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "splitSignature",
    outputs: [
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "receiveAmount",
        type: "uint256",
      },
    ],
    name: "updateReceiveAmount",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawNonSig",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawStakeNonSig",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600160005561125d806100256000396000f3fe6080604052600436106100e85760003560e01c80639e6c187d1161008a578063abe5026a11610059578063abe5026a14610304578063adc9772e14610334578063bc5640c214610347578063fa5408011461037457600080fd5b80639e6c187d14610249578063a202aace14610293578063a35f8a40146102a6578063a7bb5803146102c657600080fd5b806351e2b679116100c657806351e2b67914610148578063958091b61461019b57806397aba7f9146101ae57806397d5c1ac146101e657600080fd5b80632068e5d0146100ed5780633e38bab3146101025780633fb7ce2614610135575b600080fd5b6101006100fb366004610d9d565b610394565b005b34801561010e57600080fd5b5061012261011d366004610e30565b610502565b6040519081526020015b60405180910390f35b610100610143366004610e63565b610532565b34801561015457600080fd5b50610186610163366004610e7c565b6001600160a01b0316600090815260026020526040902080546001909101549091565b6040805192835260208301919091520161012c565b6101006101a9366004610e9e565b61063e565b3480156101ba57600080fd5b506101ce6101c9366004610ec8565b61075a565b6040516001600160a01b03909116815260200161012c565b3480156101f257600080fd5b5061022e610201366004610e7c565b6001600160a01b031660009081526001602081905260409091208054918101546002909101549192909190565b6040805193845260208401929092529082015260600161012c565b34801561025557600080fd5b50610122610264366004610e30565b6001600160a01b0391821660009081526001602090815260408083209390941682526003909201909152205490565b6101006102a1366004610f0f565b6107d9565b3480156102b257600080fd5b506101226102c1366004610f97565b610952565b3480156102d257600080fd5b506102e66102e1366004610ff6565b61098b565b60408051938452602084019290925260ff169082015260600161012c565b34801561031057600080fd5b5061032461031f366004611033565b6109ff565b604051901515815260200161012c565b610100610342366004610e9e565b610a48565b610100610355366004610e9e565b6001600160a01b03909116600090815260016020526040902060020155565b34801561038057600080fd5b5061012261038f366004610e63565b610aa4565b61039c610af7565b6103aa3333868686866109ff565b6103fb5760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726520766572696669636174696f6e206661696c65642e000060448201526064015b60405180910390fd5b3360009081526001602052604090206002015484111561042d5760405162461bcd60e51b81526004016103f2906110ca565b336000908152600160205260408120600201805486929061044f908490611136565b909155505060405184815233907f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a94243649060200160405180910390a2604051600090339086908381818185875af1925050503d80600081146104cb576040519150601f19603f3d011682016040523d82523d6000602084013e6104d0565b606091505b50509050806104f15760405162461bcd60e51b81526004016103f290611149565b506104fc6001600055565b50505050565b6001600160a01b038083166000908152600260208181526040808420948616845293909101905220545b92915050565b61053a610af7565b3360009081526001602052604090206002015481111561056c5760405162461bcd60e51b81526004016103f2906110ca565b336000908152600160205260408120600201805483929061058e908490611136565b909155505060405181815233907f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a94243649060200160405180910390a2604051600090339083908381818185875af1925050503d806000811461060a576040519150601f19603f3d011682016040523d82523d6000602084013e61060f565b606091505b50509050806106305760405162461bcd60e51b81526004016103f290611149565b5061063b6001600055565b50565b610646610af7565b3360009081526002602081815260408084206001600160a01b0387168552909201905290205481111561068b5760405162461bcd60e51b81526004016103f290611177565b61069782826000610b50565b6106a382826000610c1b565b6040518181526001600160a01b0383169033907fba4fed54385461aff90e10ba059ff384b371e14d7d622da5fe91fc4e3f9e9fa49060200160405180910390a3604051600090339083908381818185875af1925050503d8060008114610725576040519150601f19603f3d011682016040523d82523d6000602084013e61072a565b606091505b505090508061074b5760405162461bcd60e51b81526004016103f290611149565b506107566001600055565b5050565b6000806000806107698561098b565b6040805160008152602081018083528b905260ff8316918101919091526060810184905260808101839052929550909350915060019060a0016020604051602081039080840390855afa1580156107c4573d6000803e3d6000fd5b5050604051601f190151979650505050505050565b6107e1610af7565b6107ef3386868686866109ff565b61083b5760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726520766572696669636174696f6e206661696c65642e000060448201526064016103f2565b3360009081526002602081815260408084206001600160a01b038a16855290920190529020548411156108805760405162461bcd60e51b81526004016103f290611177565b61088c85856000610b50565b61089885856000610c1b565b6040518481526001600160a01b0386169033907fba4fed54385461aff90e10ba059ff384b371e14d7d622da5fe91fc4e3f9e9fa49060200160405180910390a3604051600090339086908381818185875af1925050503d806000811461091a576040519150601f19603f3d011682016040523d82523d6000602084013e61091f565b606091505b50509050806109405760405162461bcd60e51b81526004016103f290611149565b5061094b6001600055565b5050505050565b60008484848460405160200161096b94939291906111be565b604051602081830303815290604052805190602001209050949350505050565b600080600083516041146109e15760405162461bcd60e51b815260206004820152601860248201527f696e76616c6964207369676e6174757265206c656e677468000000000000000060448201526064016103f2565b50505060208101516040820151606090920151909260009190911a90565b600080610a0e87878787610952565b90506000610a1b82610aa4565b9050886001600160a01b0316610a31828661075a565b6001600160a01b0316149998505050505050505050565b610a5482826001610b50565b610a6082826001610c1b565b6040518181526001600160a01b0383169033907f99039fcf0a98f484616c5196ee8b2ecfa971babf0b519848289ea4db381f85f79060200160405180910390a35050565b6040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b600260005403610b495760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016103f2565b6002600055565b6001600160a01b038316600090815260016020526040902081610b8257828160010154610b7d9190611136565b610b92565b828160010154610b929190611214565b600182015581610baf578054610baa90600190611136565b610bbc565b8054610bbc906001611214565b815581610be557336000908152600382016020526040902054610be0908490611136565b610c02565b336000908152600382016020526040902054610c02908490611214565b3360009081526003909201602052604090912055505050565b33600090815260026020526040902081610c4457828160010154610c3f9190611136565b610c54565b828160010154610c549190611214565b600182015581610c71578054610c6c90600190611136565b610c7e565b8054610c7e906001611214565b815581610cb0576001600160a01b0384166000908152600282016020526040902054610cab908490611136565b610cd6565b6001600160a01b0384166000908152600282016020526040902054610cd6908490611214565b6001600160a01b039094166000908152600290910160205260409020929092555050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610d2157600080fd5b813567ffffffffffffffff80821115610d3c57610d3c610cfa565b604051601f8301601f19908116603f01168101908282118183101715610d6457610d64610cfa565b81604052838152866020858801011115610d7d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060808587031215610db357600080fd5b84359350602085013567ffffffffffffffff80821115610dd257600080fd5b610dde88838901610d10565b9450604087013593506060870135915080821115610dfb57600080fd5b50610e0887828801610d10565b91505092959194509250565b80356001600160a01b0381168114610e2b57600080fd5b919050565b60008060408385031215610e4357600080fd5b610e4c83610e14565b9150610e5a60208401610e14565b90509250929050565b600060208284031215610e7557600080fd5b5035919050565b600060208284031215610e8e57600080fd5b610e9782610e14565b9392505050565b60008060408385031215610eb157600080fd5b610eba83610e14565b946020939093013593505050565b60008060408385031215610edb57600080fd5b82359150602083013567ffffffffffffffff811115610ef957600080fd5b610f0585828601610d10565b9150509250929050565b600080600080600060a08688031215610f2757600080fd5b610f3086610e14565b945060208601359350604086013567ffffffffffffffff80821115610f5457600080fd5b610f6089838a01610d10565b9450606088013593506080880135915080821115610f7d57600080fd5b50610f8a88828901610d10565b9150509295509295909350565b60008060008060808587031215610fad57600080fd5b610fb685610e14565b935060208501359250604085013567ffffffffffffffff811115610fd957600080fd5b610fe587828801610d10565b949793965093946060013593505050565b60006020828403121561100857600080fd5b813567ffffffffffffffff81111561101f57600080fd5b61102b84828501610d10565b949350505050565b60008060008060008060c0878903121561104c57600080fd5b61105587610e14565b955061106360208801610e14565b945060408701359350606087013567ffffffffffffffff8082111561108757600080fd5b6110938a838b01610d10565b94506080890135935060a08901359150808211156110b057600080fd5b506110bd89828a01610d10565b9150509295509295509295565b60208082526036908201527f54686520616d6f756e7420617661696c61626c6520666f7220776974686472616040820152753bb0b6103430b9903132b2b71032bc31b2b2b232b21760511b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561052c5761052c611120565b6020808252601490820152732330b4b632b2103a379039b2b7321022ba3432b960611b604082015260600190565b60208082526027908201527f5769746864726177616c20616d6f756e742065786365656473207374616b652060408201526630b6b7bab73a1760c91b606082015260800190565b6bffffffffffffffffffffffff198560601b1681528360148201526000835160005b818110156111fd57602081870181015160348684010152016111e0565b506034920191820192909252605401949350505050565b8082018082111561052c5761052c61112056fea2646970667358221220e676eb7396ef450f65ecb6b9cecd509a1bff6a1dbb727d5a528fbaaf3b3d224d64736f6c63430008140033";

type PatronMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PatronMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PatronMock__factory extends ContractFactory {
  constructor(...args: PatronMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      PatronMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PatronMock__factory {
    return super.connect(runner) as PatronMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PatronMockInterface {
    return new Interface(_abi) as PatronMockInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): PatronMock {
    return new Contract(address, _abi, runner) as unknown as PatronMock;
  }
}
