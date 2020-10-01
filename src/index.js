import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

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

let transporter =  nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: smtp_login,
        pass: smtp_password
    }
});

app.post('/sendMessage', async function (req, res) {
    let {message, contact, name} = req.body;

    let info = await transporter.sendMail({
        from: "Kostya",
        to: "bar@example.com",
        subject: "testing gmail",
        text: "Hello world?",
        html: `<b>Message from your portfolio page</b>
        <div>name: ${name}</div>
        <div>contact: ${contact}</div>
        <div>message: ${message}</div>`
    });

    res.send('ok');
});

let port = process.env.PORT || 3010;

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});