// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_pb = require('./auth_pb.js');

function serialize_auth_DoesMobileNumberExist(arg) {
  if (!(arg instanceof auth_pb.DoesMobileNumberExist)) {
    throw new Error('Expected argument of type auth.DoesMobileNumberExist');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_DoesMobileNumberExist(buffer_arg) {
  return auth_pb.DoesMobileNumberExist.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_IsValidated(arg) {
  if (!(arg instanceof auth_pb.IsValidated)) {
    throw new Error('Expected argument of type auth.IsValidated');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_IsValidated(buffer_arg) {
  return auth_pb.IsValidated.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_MobileNumber(arg) {
  if (!(arg instanceof auth_pb.MobileNumber)) {
    throw new Error('Expected argument of type auth.MobileNumber');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_MobileNumber(buffer_arg) {
  return auth_pb.MobileNumber.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_OTP(arg) {
  if (!(arg instanceof auth_pb.OTP)) {
    throw new Error('Expected argument of type auth.OTP');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_OTP(buffer_arg) {
  return auth_pb.OTP.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_OTPWithMobileNumber(arg) {
  if (!(arg instanceof auth_pb.OTPWithMobileNumber)) {
    throw new Error('Expected argument of type auth.OTPWithMobileNumber');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_OTPWithMobileNumber(buffer_arg) {
  return auth_pb.OTPWithMobileNumber.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  varify: {
    path: '/auth.AuthService/varify',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.MobileNumber,
    responseType: auth_pb.DoesMobileNumberExist,
    requestSerialize: serialize_auth_MobileNumber,
    requestDeserialize: deserialize_auth_MobileNumber,
    responseSerialize: serialize_auth_DoesMobileNumberExist,
    responseDeserialize: deserialize_auth_DoesMobileNumberExist,
  },
  generateOtp: {
    path: '/auth.AuthService/generateOtp',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.MobileNumber,
    responseType: auth_pb.OTP,
    requestSerialize: serialize_auth_MobileNumber,
    requestDeserialize: deserialize_auth_MobileNumber,
    responseSerialize: serialize_auth_OTP,
    responseDeserialize: deserialize_auth_OTP,
  },
  validateOtp: {
    path: '/auth.AuthService/validateOtp',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.OTPWithMobileNumber,
    responseType: auth_pb.IsValidated,
    requestSerialize: serialize_auth_OTPWithMobileNumber,
    requestDeserialize: deserialize_auth_OTPWithMobileNumber,
    responseSerialize: serialize_auth_IsValidated,
    responseDeserialize: deserialize_auth_IsValidated,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
