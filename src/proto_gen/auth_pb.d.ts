// package: auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class MobileNumber extends jspb.Message { 
    getNumber(): string;
    setNumber(value: string): MobileNumber;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MobileNumber.AsObject;
    static toObject(includeInstance: boolean, msg: MobileNumber): MobileNumber.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MobileNumber, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MobileNumber;
    static deserializeBinaryFromReader(message: MobileNumber, reader: jspb.BinaryReader): MobileNumber;
}

export namespace MobileNumber {
    export type AsObject = {
        number: string,
    }
}

export class OTP extends jspb.Message { 
    getOtp(): number;
    setOtp(value: number): OTP;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OTP.AsObject;
    static toObject(includeInstance: boolean, msg: OTP): OTP.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OTP, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OTP;
    static deserializeBinaryFromReader(message: OTP, reader: jspb.BinaryReader): OTP;
}

export namespace OTP {
    export type AsObject = {
        otp: number,
    }
}

export class DoesMobileNumberExist extends jspb.Message { 
    getExists(): boolean;
    setExists(value: boolean): DoesMobileNumberExist;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DoesMobileNumberExist.AsObject;
    static toObject(includeInstance: boolean, msg: DoesMobileNumberExist): DoesMobileNumberExist.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DoesMobileNumberExist, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DoesMobileNumberExist;
    static deserializeBinaryFromReader(message: DoesMobileNumberExist, reader: jspb.BinaryReader): DoesMobileNumberExist;
}

export namespace DoesMobileNumberExist {
    export type AsObject = {
        exists: boolean,
    }
}

export class OTPWithMobileNumber extends jspb.Message { 
    getOtp(): number;
    setOtp(value: number): OTPWithMobileNumber;
    getNumber(): string;
    setNumber(value: string): OTPWithMobileNumber;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OTPWithMobileNumber.AsObject;
    static toObject(includeInstance: boolean, msg: OTPWithMobileNumber): OTPWithMobileNumber.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OTPWithMobileNumber, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OTPWithMobileNumber;
    static deserializeBinaryFromReader(message: OTPWithMobileNumber, reader: jspb.BinaryReader): OTPWithMobileNumber;
}

export namespace OTPWithMobileNumber {
    export type AsObject = {
        otp: number,
        number: string,
    }
}

export class IsValidated extends jspb.Message { 
    getValidated(): boolean;
    setValidated(value: boolean): IsValidated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IsValidated.AsObject;
    static toObject(includeInstance: boolean, msg: IsValidated): IsValidated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IsValidated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IsValidated;
    static deserializeBinaryFromReader(message: IsValidated, reader: jspb.BinaryReader): IsValidated;
}

export namespace IsValidated {
    export type AsObject = {
        validated: boolean,
    }
}
