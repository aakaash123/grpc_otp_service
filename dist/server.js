"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = __importStar(require("@grpc/grpc-js"));
const auth_grpc_pb_1 = require("./proto_gen/auth_grpc_pb");
const auth_pb_1 = require("./proto_gen/auth_pb");
const numbers = [
    '1234567890', '2345678901', '3456789012', '4567890123', '5678901234',
    '6789012345', '7890123456', '8901234567', '9012345678', '0123456789',
    '1234567800', '2345678900'
];
const otps = new Map();
const server = new grpc.Server();
const authService = {
    varify: (call, callback) => {
        const number = call.request.getNumber();
        if (number.length === 10) {
            const exists = numbers.includes(number);
            const response = new auth_pb_1.DoesMobileNumberExist();
            response.setExists(exists);
            callback(null, response);
        }
        else {
            callback(new Error('Invalid mobile number length'));
        }
    },
    generateOtp: (call, callback) => {
        const number = call.request.getNumber();
        if (number.length === 10) {
            const otp = Math.floor(100000 + Math.random() * 900000);
            otps.set(number, otp);
            const response = new auth_pb_1.OTP();
            response.setOtp(otp);
            callback(null, response);
            console.log(otp);
        }
        else {
            callback(new Error('Invalid mobile number length'));
        }
    },
    validateOtp: (call, callback) => {
        const number = call.request.getNumber();
        const otp = call.request.getOtp();
        const response = new auth_pb_1.IsValidated();
        if (otps.has(number) && otps.get(number) === otp) {
            otps.delete(number);
            response.setValidated(true);
        }
        else {
            response.setValidated(false);
        }
        callback(null, response);
    }
};
server.addService(auth_grpc_pb_1.AuthServiceService, authService);
server.bindAsync('0.0.0.0:50050', grpc.ServerCredentials.createInsecure(), () => {
    console.log('gRPC server running on port: 0.0.0.0:50050');
    server.start();
});
