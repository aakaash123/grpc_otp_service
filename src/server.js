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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = __importStar(require("@grpc/grpc-js"));
const protoLoader = __importStar(require("@grpc/proto-loader"));
const path_1 = __importDefault(require("path"));
const PROTO_PATH = path_1.default.join(__dirname, '../proto/auth.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
const grpcObject = grpc.loadPackageDefinition(packageDefinition);
const authProto = grpcObject.auth;
const numbers = [
    '1234567890', '2345678901', '3456789012', '4567890123', '5678901234',
    '6789012345', '7890123456', '8901234567', '9012345678', '0123456789',
    '1234567800', '2345678900'
];
const server = new grpc.Server();
server.addService(authProto.AuthService.service, {
    varify: (call, callback) => {
        if (call.request.number.length === 10) {
            if (numbers.includes(call.request.number)) {
                callback(null, { exists: true });
            }
            else {
                callback(null, { exists: false });
            }
        }
        else {
            callback(new Error('Invalid mobile number length'));
        }
    },
    generateOtp: (call, callback) => {
        // Implement generateOtp logic
    },
    validateOtp: (call, callback) => {
        // Implement validateOtp logic
    }
});
server.bindAsync('0.0.0.0:50050', grpc.ServerCredentials.createInsecure(), () => {
    console.log('gRPC server running on port: 0.0.0.0:50050');
    server.start();
});
