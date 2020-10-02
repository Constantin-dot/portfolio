const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let smtp_login = process.env.SMTP_LOGIN;
let smtp_password = process.env.SMTP_PASSWORD;

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: smtp_login,
        pass: smtp_password
    }
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/sendMessage', async function (req, res) {
    let {message, contact, name} = req.body;
    let info = await transporter.sendMail({
        from: "My profile page",
        to: "konstantinkspb@gmail.com",
        subject: "New response",
        html: `<b>Message from your portfolio page</b>
               <div>name: ${name}</div>
               <div>contact: ${contact}</div>
               <div>message: ${message}</div>`
    });

    res.send("ok");
});

let port = process.env.PORT || 3010;

app.listen(port, function () {
    console.log('Example app listening on port 3010!');
});