import express from 'express';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const app = express();

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
const client = new authProto.AuthService('localhost:50050', grpc.credentials.createInsecure());

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.urlencoded({ extended: true }));

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
    client.varify({ number }, (error: any, response: any) => {
        if (!error && response.exists) {
            client.generateOtp({ number }, (otpError: any) => {
                if (!otpError) {
                    res.render('index', {
                        step: 'enterOtp',
                        message: 'OTP sent to your number',
                        number,
                        otp: ''
                    });
                } else {
                    res.render('index', {
                        step: 'enterNumber',
                        message: 'Failed to generate OTP',
                        number: '',
                        otp: ''
                    });
                }
            });
        } else {
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
    client.validateOtp({ number, otp: parseInt(otp, 10) }, (error: any, response: any) => {
        if (!error && response.validated) {
            res.render('index', {
                step: 'validated',
                message: 'Number validated successfully',
                number: '',
                otp: ''
            });
        } else {
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
