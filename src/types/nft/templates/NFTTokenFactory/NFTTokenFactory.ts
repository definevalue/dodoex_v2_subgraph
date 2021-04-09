// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NewERC1155 extends ethereum.Event {
  get params(): NewERC1155__Params {
    return new NewERC1155__Params(this);
  }
}

export class NewERC1155__Params {
  _event: NewERC1155;

  constructor(event: NewERC1155) {
    this._event = event;
  }

  get erc1155(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewERC721 extends ethereum.Event {
  get params(): NewERC721__Params {
    return new NewERC721__Params(this);
  }
}

export class NewERC721__Params {
  _event: NewERC721;

  constructor(event: NewERC721) {
    this._event = event;
  }

  get erc721(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NFTTokenFactory extends ethereum.SmartContract {
  static bind(address: Address): NFTTokenFactory {
    return new NFTTokenFactory("NFTTokenFactory", address);
  }

  _CLONE_FACTORY_(): Address {
    let result = super.call(
      "_CLONE_FACTORY_",
      "_CLONE_FACTORY_():(address)",
      []
    );

    return result[0].toAddress();
  }

  try__CLONE_FACTORY_(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_CLONE_FACTORY_",
      "_CLONE_FACTORY_():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _ERC1155_TEMPLATE_(): Address {
    let result = super.call(
      "_ERC1155_TEMPLATE_",
      "_ERC1155_TEMPLATE_():(address)",
      []
    );

    return result[0].toAddress();
  }

  try__ERC1155_TEMPLATE_(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_ERC1155_TEMPLATE_",
      "_ERC1155_TEMPLATE_():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _ERC721_TEMPLATE_(): Address {
    let result = super.call(
      "_ERC721_TEMPLATE_",
      "_ERC721_TEMPLATE_():(address)",
      []
    );

    return result[0].toAddress();
  }

  try__ERC721_TEMPLATE_(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_ERC721_TEMPLATE_",
      "_ERC721_TEMPLATE_():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _USER_ERC1155_REGISTRY_(param0: Address, param1: BigInt): Address {
    let result = super.call(
      "_USER_ERC1155_REGISTRY_",
      "_USER_ERC1155_REGISTRY_(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try__USER_ERC1155_REGISTRY_(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_USER_ERC1155_REGISTRY_",
      "_USER_ERC1155_REGISTRY_(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _USER_ERC721_REGISTRY_(param0: Address, param1: BigInt): Address {
    let result = super.call(
      "_USER_ERC721_REGISTRY_",
      "_USER_ERC721_REGISTRY_(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try__USER_ERC721_REGISTRY_(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_USER_ERC721_REGISTRY_",
      "_USER_ERC721_REGISTRY_(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createERC721(baseUrl: string): Address {
    let result = super.call("createERC721", "createERC721(string):(address)", [
      ethereum.Value.fromString(baseUrl)
    ]);

    return result[0].toAddress();
  }

  try_createERC721(baseUrl: string): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createERC721",
      "createERC721(string):(address)",
      [ethereum.Value.fromString(baseUrl)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createERC1155(amount: BigInt, baseUrl: string): Address {
    let result = super.call(
      "createERC1155",
      "createERC1155(uint256,string):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromString(baseUrl)
      ]
    );

    return result[0].toAddress();
  }

  try_createERC1155(
    amount: BigInt,
    baseUrl: string
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createERC1155",
      "createERC1155(uint256,string):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromString(baseUrl)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getERC721TokenByUser(user: Address): Array<Address> {
    let result = super.call(
      "getERC721TokenByUser",
      "getERC721TokenByUser(address):(address[])",
      [ethereum.Value.fromAddress(user)]
    );

    return result[0].toAddressArray();
  }

  try_getERC721TokenByUser(user: Address): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getERC721TokenByUser",
      "getERC721TokenByUser(address):(address[])",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get cloneFactory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get erc721Template(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get erc1155Tempalte(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateERC721Call extends ethereum.Call {
  get inputs(): CreateERC721Call__Inputs {
    return new CreateERC721Call__Inputs(this);
  }

  get outputs(): CreateERC721Call__Outputs {
    return new CreateERC721Call__Outputs(this);
  }
}

export class CreateERC721Call__Inputs {
  _call: CreateERC721Call;

  constructor(call: CreateERC721Call) {
    this._call = call;
  }

  get baseUrl(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class CreateERC721Call__Outputs {
  _call: CreateERC721Call;

  constructor(call: CreateERC721Call) {
    this._call = call;
  }

  get newERC721(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class CreateERC1155Call extends ethereum.Call {
  get inputs(): CreateERC1155Call__Inputs {
    return new CreateERC1155Call__Inputs(this);
  }

  get outputs(): CreateERC1155Call__Outputs {
    return new CreateERC1155Call__Outputs(this);
  }
}

export class CreateERC1155Call__Inputs {
  _call: CreateERC1155Call;

  constructor(call: CreateERC1155Call) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get baseUrl(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class CreateERC1155Call__Outputs {
  _call: CreateERC1155Call;

  constructor(call: CreateERC1155Call) {
    this._call = call;
  }

  get newERC1155(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
