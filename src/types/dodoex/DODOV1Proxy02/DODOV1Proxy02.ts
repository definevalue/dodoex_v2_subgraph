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

export class OrderHistory extends ethereum.Event {
  get params(): OrderHistory__Params {
    return new OrderHistory__Params(this);
  }
}

export class OrderHistory__Params {
  _event: OrderHistory;

  constructor(event: OrderHistory) {
    this._event = event;
  }

  get fromToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get toToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get fromAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get returnAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class OwnershipTransferPrepared extends ethereum.Event {
  get params(): OwnershipTransferPrepared__Params {
    return new OwnershipTransferPrepared__Params(this);
  }
}

export class OwnershipTransferPrepared__Params {
  _event: OwnershipTransferPrepared;

  constructor(event: OwnershipTransferPrepared) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class DODOV1Proxy02 extends ethereum.SmartContract {
  static bind(address: Address): DODOV1Proxy02 {
    return new DODOV1Proxy02("DODOV1Proxy02", address);
  }

  _CHI_TOKEN_(): Address {
    let result = super.call("_CHI_TOKEN_", "_CHI_TOKEN_():(address)", []);

    return result[0].toAddress();
  }

  try__CHI_TOKEN_(): ethereum.CallResult<Address> {
    let result = super.tryCall("_CHI_TOKEN_", "_CHI_TOKEN_():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _DODO_APPROVE_(): Address {
    let result = super.call("_DODO_APPROVE_", "_DODO_APPROVE_():(address)", []);

    return result[0].toAddress();
  }

  try__DODO_APPROVE_(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_DODO_APPROVE_",
      "_DODO_APPROVE_():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _DODO_SELL_HELPER_(): Address {
    let result = super.call(
      "_DODO_SELL_HELPER_",
      "_DODO_SELL_HELPER_():(address)",
      []
    );

    return result[0].toAddress();
  }

  try__DODO_SELL_HELPER_(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_DODO_SELL_HELPER_",
      "_DODO_SELL_HELPER_():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _GAS_DODO_MAX_RETURN_(): BigInt {
    let result = super.call(
      "_GAS_DODO_MAX_RETURN_",
      "_GAS_DODO_MAX_RETURN_():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__GAS_DODO_MAX_RETURN_(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_GAS_DODO_MAX_RETURN_",
      "_GAS_DODO_MAX_RETURN_():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _GAS_EXTERNAL_RETURN_(): BigInt {
    let result = super.call(
      "_GAS_EXTERNAL_RETURN_",
      "_GAS_EXTERNAL_RETURN_():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__GAS_EXTERNAL_RETURN_(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_GAS_EXTERNAL_RETURN_",
      "_GAS_EXTERNAL_RETURN_():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _NEW_OWNER_(): Address {
    let result = super.call("_NEW_OWNER_", "_NEW_OWNER_():(address)", []);

    return result[0].toAddress();
  }

  try__NEW_OWNER_(): ethereum.CallResult<Address> {
    let result = super.tryCall("_NEW_OWNER_", "_NEW_OWNER_():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _OWNER_(): Address {
    let result = super.call("_OWNER_", "_OWNER_():(address)", []);

    return result[0].toAddress();
  }

  try__OWNER_(): ethereum.CallResult<Address> {
    let result = super.tryCall("_OWNER_", "_OWNER_():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _WETH_(): Address {
    let result = super.call("_WETH_", "_WETH_():(address)", []);

    return result[0].toAddress();
  }

  try__WETH_(): ethereum.CallResult<Address> {
    let result = super.tryCall("_WETH_", "_WETH_():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isWhiteListed(param0: Address): boolean {
    let result = super.call("isWhiteListed", "isWhiteListed(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isWhiteListed(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isWhiteListed",
      "isWhiteListed(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  get dodoApporve(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get dodoSellHelper(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get weth(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get chiToken(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class ClaimOwnershipCall extends ethereum.Call {
  get inputs(): ClaimOwnershipCall__Inputs {
    return new ClaimOwnershipCall__Inputs(this);
  }

  get outputs(): ClaimOwnershipCall__Outputs {
    return new ClaimOwnershipCall__Outputs(this);
  }
}

export class ClaimOwnershipCall__Inputs {
  _call: ClaimOwnershipCall;

  constructor(call: ClaimOwnershipCall) {
    this._call = call;
  }
}

export class ClaimOwnershipCall__Outputs {
  _call: ClaimOwnershipCall;

  constructor(call: ClaimOwnershipCall) {
    this._call = call;
  }
}

export class InitOwnerCall extends ethereum.Call {
  get inputs(): InitOwnerCall__Inputs {
    return new InitOwnerCall__Inputs(this);
  }

  get outputs(): InitOwnerCall__Outputs {
    return new InitOwnerCall__Outputs(this);
  }
}

export class InitOwnerCall__Inputs {
  _call: InitOwnerCall;

  constructor(call: InitOwnerCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitOwnerCall__Outputs {
  _call: InitOwnerCall;

  constructor(call: InitOwnerCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateGasReturnCall extends ethereum.Call {
  get inputs(): UpdateGasReturnCall__Inputs {
    return new UpdateGasReturnCall__Inputs(this);
  }

  get outputs(): UpdateGasReturnCall__Outputs {
    return new UpdateGasReturnCall__Outputs(this);
  }
}

export class UpdateGasReturnCall__Inputs {
  _call: UpdateGasReturnCall;

  constructor(call: UpdateGasReturnCall) {
    this._call = call;
  }

  get newDodoGasReturn(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newExternalGasReturn(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateGasReturnCall__Outputs {
  _call: UpdateGasReturnCall;

  constructor(call: UpdateGasReturnCall) {
    this._call = call;
  }
}

export class AddWhiteListCall extends ethereum.Call {
  get inputs(): AddWhiteListCall__Inputs {
    return new AddWhiteListCall__Inputs(this);
  }

  get outputs(): AddWhiteListCall__Outputs {
    return new AddWhiteListCall__Outputs(this);
  }
}

export class AddWhiteListCall__Inputs {
  _call: AddWhiteListCall;

  constructor(call: AddWhiteListCall) {
    this._call = call;
  }

  get contractAddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddWhiteListCall__Outputs {
  _call: AddWhiteListCall;

  constructor(call: AddWhiteListCall) {
    this._call = call;
  }
}

export class RemoveWhiteListCall extends ethereum.Call {
  get inputs(): RemoveWhiteListCall__Inputs {
    return new RemoveWhiteListCall__Inputs(this);
  }

  get outputs(): RemoveWhiteListCall__Outputs {
    return new RemoveWhiteListCall__Outputs(this);
  }
}

export class RemoveWhiteListCall__Inputs {
  _call: RemoveWhiteListCall;

  constructor(call: RemoveWhiteListCall) {
    this._call = call;
  }

  get contractAddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveWhiteListCall__Outputs {
  _call: RemoveWhiteListCall;

  constructor(call: RemoveWhiteListCall) {
    this._call = call;
  }
}

export class DodoSwapV1Call extends ethereum.Call {
  get inputs(): DodoSwapV1Call__Inputs {
    return new DodoSwapV1Call__Inputs(this);
  }

  get outputs(): DodoSwapV1Call__Outputs {
    return new DodoSwapV1Call__Outputs(this);
  }
}

export class DodoSwapV1Call__Inputs {
  _call: DodoSwapV1Call;

  constructor(call: DodoSwapV1Call) {
    this._call = call;
  }

  get fromToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get toToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get fromTokenAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get minReturnAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get dodoPairs(): Array<Address> {
    return this._call.inputValues[4].value.toAddressArray();
  }

  get directions(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get deadLine(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class DodoSwapV1Call__Outputs {
  _call: DodoSwapV1Call;

  constructor(call: DodoSwapV1Call) {
    this._call = call;
  }

  get returnAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ExternalSwapCall extends ethereum.Call {
  get inputs(): ExternalSwapCall__Inputs {
    return new ExternalSwapCall__Inputs(this);
  }

  get outputs(): ExternalSwapCall__Outputs {
    return new ExternalSwapCall__Outputs(this);
  }
}

export class ExternalSwapCall__Inputs {
  _call: ExternalSwapCall;

  constructor(call: ExternalSwapCall) {
    this._call = call;
  }

  get fromToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get toToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get approveTarget(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get swapTarget(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get fromTokenAmount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get minReturnAmount(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get callDataConcat(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }

  get deadLine(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class ExternalSwapCall__Outputs {
  _call: ExternalSwapCall;

  constructor(call: ExternalSwapCall) {
    this._call = call;
  }

  get returnAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class MixSwapV1Call extends ethereum.Call {
  get inputs(): MixSwapV1Call__Inputs {
    return new MixSwapV1Call__Inputs(this);
  }

  get outputs(): MixSwapV1Call__Outputs {
    return new MixSwapV1Call__Outputs(this);
  }
}

export class MixSwapV1Call__Inputs {
  _call: MixSwapV1Call;

  constructor(call: MixSwapV1Call) {
    this._call = call;
  }

  get fromToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get toToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get fromTokenAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get minReturnAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get mixPairs(): Array<Address> {
    return this._call.inputValues[4].value.toAddressArray();
  }

  get directions(): Array<BigInt> {
    return this._call.inputValues[5].value.toBigIntArray();
  }

  get portionPath(): Array<Address> {
    return this._call.inputValues[6].value.toAddressArray();
  }

  get deadLine(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class MixSwapV1Call__Outputs {
  _call: MixSwapV1Call;

  constructor(call: MixSwapV1Call) {
    this._call = call;
  }

  get returnAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
