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
const express_1 = __importDefault(require("express"));
const grpc = __importStar(require("@grpc/grpc-js"));
const path_1 = __importDefault(require("path"));
const auth_grpc_pb_1 = require("./proto_gen/auth_grpc_pb");
const auth_pb_1 = require("./proto_gen/auth_pb");
const app = (0, express_1.default)();
const client = new auth_grpc_pb_1.AuthServiceClient('localhost:50050', grpc.credentials.createInsecure());
const port = 3000;
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../views'));
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render('index', {
        step: 'enterNumber',
        message: '',
        number: '',
        otp: ''
    });
});
app.post('/get-otp', (req, res) => {
    const { number } = req.body;
    const mobileNumber = new auth_pb_1.MobileNumber();
    mobileNumber.setNumber(number);
    client.varify(mobileNumber, (error, response) => {
        if (!error && response.getExists()) {
            client.generateOtp(mobileNumber, (otpError) => {
                if (!otpError) {
                    res.render('index', {
                        step: 'enterOtp',
                        message: 'OTP sent to your number',
                        number,
                        otp: ''
                    });
                }
                else {
                    res.render('index', {
                        step: 'enterNumber',
                        message: 'Failed to generate OTP',
                        number: '',
                        otp: ''
                    });
                }
            });
        }
        else {
            res.render('index', {
                step: 'enterNumber',
                message: 'Number does not exist or invalid number',
                number: '',
                otp: ''
            });
        }
    });
});
app.post('/validate-otp', (req, res) => {
    const { number, otp } = req.body;
    const otpWithMobileNumber = new auth_pb_1.OTPWithMobileNumber();
    otpWithMobileNumber.setNumber(number);
    otpWithMobileNumber.setOtp(parseInt(otp, 10));
    client.validateOtp(otpWithMobileNumber, (error, response) => {
        if (!error && response.getValidated()) {
            res.render('index', {
                step: 'validated',
                message: 'Number validated successfully',
                number: '',
                otp: ''
            });
        }
        else {
            res.render('index', {
                step: 'enterOtp',
                message: 'Invalid OTP',
                number,
                otp: ''
            });
        }
    });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
