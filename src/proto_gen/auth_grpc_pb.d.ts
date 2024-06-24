// package: auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as auth_pb from "./auth_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    varify: IAuthServiceService_Ivarify;
    generateOtp: IAuthServiceService_IgenerateOtp;
    validateOtp: IAuthServiceService_IvalidateOtp;
}

interface IAuthServiceService_Ivarify extends grpc.MethodDefinition<auth_pb.MobileNumber, auth_pb.DoesMobileNumberExist> {
    path: "/auth.AuthService/varify";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.MobileNumber>;
    requestDeserialize: grpc.deserialize<auth_pb.MobileNumber>;
    responseSerialize: grpc.serialize<auth_pb.DoesMobileNumberExist>;
    responseDeserialize: grpc.deserialize<auth_pb.DoesMobileNumberExist>;
}
interface IAuthServiceService_IgenerateOtp extends grpc.MethodDefinition<auth_pb.MobileNumber, auth_pb.OTP> {
    path: "/auth.AuthService/generateOtp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.MobileNumber>;
    requestDeserialize: grpc.deserialize<auth_pb.MobileNumber>;
    responseSerialize: grpc.serialize<auth_pb.OTP>;
    responseDeserialize: grpc.deserialize<auth_pb.OTP>;
}
interface IAuthServiceService_IvalidateOtp extends grpc.MethodDefinition<auth_pb.OTPWithMobileNumber, auth_pb.IsValidated> {
    path: "/auth.AuthService/validateOtp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.OTPWithMobileNumber>;
    requestDeserialize: grpc.deserialize<auth_pb.OTPWithMobileNumber>;
    responseSerialize: grpc.serialize<auth_pb.IsValidated>;
    responseDeserialize: grpc.deserialize<auth_pb.IsValidated>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer extends grpc.UntypedServiceImplementation {
    varify: grpc.handleUnaryCall<auth_pb.MobileNumber, auth_pb.DoesMobileNumberExist>;
    generateOtp: grpc.handleUnaryCall<auth_pb.MobileNumber, auth_pb.OTP>;
    validateOtp: grpc.handleUnaryCall<auth_pb.OTPWithMobileNumber, auth_pb.IsValidated>;
}

export interface IAuthServiceClient {
    varify(request: auth_pb.MobileNumber, callback: (error: grpc.ServiceError | null, response: auth_pb.DoesMobileNumberExist) => void): grpc.ClientUnaryCall;
    varify(request: auth_pb.MobileNumber, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.DoesMobileNumberExist) => void): grpc.ClientUnaryCall;
    varify(request: auth_pb.MobileNumber, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.DoesMobileNumberExist) => void): grpc.ClientUnaryCall;
    generateOtp(request: auth_pb.MobileNumber, callback: (error: grpc.ServiceError | null, response: auth_pb.OTP) => void): grpc.ClientUnaryCall;
    generateOtp(request: auth_pb.MobileNumber, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.OTP) => void): grpc.ClientUnaryCall;
    generateOtp(request: auth_pb.MobileNumber, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.OTP) => void): grpc.ClientUnaryCall;
    validateOtp(request: auth_pb.OTPWithMobileNumber, callback: (error: grpc.ServiceError | null, response: auth_pb.IsValidated) => void): grpc.ClientUnaryCall;
    validateOtp(request: auth_pb.OTPWithMobileNumber, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.IsValidated) => void): grpc.ClientUnaryCall;
    validateOtp(request: auth_pb.OTPWithMobileNumber, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.IsValidated) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public varify(request: auth_pb.MobileNumber, callback: (error: grpc.ServiceError | null, response: auth_pb.DoesMobileNumberExist) => void): grpc.ClientUnaryCall;
    public varify(request: auth_pb.MobileNumber, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.DoesMobileNumberExist) => void): grpc.ClientUnaryCall;
    public varify(request: auth_pb.MobileNumber, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.DoesMobileNumberExist) => void): grpc.ClientUnaryCall;
    public generateOtp(request: auth_pb.MobileNumber, callback: (error: grpc.ServiceError | null, response: auth_pb.OTP) => void): grpc.ClientUnaryCall;
    public generateOtp(request: auth_pb.MobileNumber, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.OTP) => void): grpc.ClientUnaryCall;
    public generateOtp(request: auth_pb.MobileNumber, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.OTP) => void): grpc.ClientUnaryCall;
    public validateOtp(request: auth_pb.OTPWithMobileNumber, callback: (error: grpc.ServiceError | null, response: auth_pb.IsValidated) => void): grpc.ClientUnaryCall;
    public validateOtp(request: auth_pb.OTPWithMobileNumber, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.IsValidated) => void): grpc.ClientUnaryCall;
    public validateOtp(request: auth_pb.OTPWithMobileNumber, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.IsValidated) => void): grpc.ClientUnaryCall;
}
