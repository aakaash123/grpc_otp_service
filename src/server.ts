import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_PATH = path.join(__dirname, '../proto/auth.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const grpcObject = grpc.loadPackageDefinition(packageDefinition) as any;
const authProto = grpcObject.auth;

const numbers = [
    '1234567890', '2345678901', '3456789012', '4567890123', '5678901234',
    '6789012345', '7890123456', '8901234567', '9012345678', '0123456789',
    '1234567800', '2345678900', '9695960616'
];

const otps = new Map<string, number>();

const server = new grpc.Server();

server.addService(authProto.AuthService.service, {
    varify: (call: any, callback: any) => {
        if (call.request.number.length === 10) {
            if (numbers.includes(call.request.number)) {
                callback(null, { exists: true });
            } else {
                callback(null, { exists: false });
            }
        } else {
            callback(new Error('Invalid mobile number length'));
        }
    },
    generateOtp: (call: any, callback: any) => {
        if (call.request.number.length === 10) {
            const otp = Math.floor(100000 + Math.random() * 900000);
            otps.set(call.request.number, otp);

            console.log(otp);
            callback(null, { otp });
        } else {
            callback(new Error('Invalid mobile number length'));
        }
    },
    validateOtp: (call: any, callback: any) => {
        const { number, otp } = call.request;
        if (otps.has(number) && otps.get(number) === otp) {
            otps.delete(number);
            callback(null, { validated: true });
        } else {
            callback(null, { validated: false });
        }
    }
});

server.bindAsync('0.0.0.0:50050', grpc.ServerCredentials.createInsecure(), () => {
    console.log('gRPC server running on port: 0.0.0.0:50050');
    server.start();
});
