//
//  brew install node
//  in directory :
//   npm init
//   npm install express nodemailer http path
//
//  execute :
//    node websiteServer.js
//
const port = 9002;

// 创建一个Express服务器
var express = require('express')
// var bodyParser = require("body-parser")
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var path = require("path");
var http = require("http");

var app = express()
var server = http.createServer(app);
// need it...
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: false }));

var transporter = nodemailer.createTransport({
        //host: 'smtp.office365.com', // Office 365 server
        //port: 587,     // secure SMTP
        service: 'Gmail',
        secure: false, // false for TLS - as a boolean not string - but the default is false so just remove this completely
        auth: {
            user: 'appcookingstaff@gmail.com',
            pass: 'appcooking123./' 
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });


//allow custom header and CORS
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); /让options请求快速返回/
    }
    else {
        next();
    }
});


// send mail with defined transport object


app.post('/email',function(request, response){
    var email=request.body.email
    var name =request.body.name
    var subject = request.body.subject
    var text =request.body.text
    var mailOptions = {
    from: 'appcookingstaff@gmail.com', // sender address
    to: 'support@appcook.in', // list of receivers
    // to:"qinlihong@appcook.in",
    subject: subject,// Subject line
    text: 'useremail:' + email + '\n' + 'name:' + name + '\n'+text, // plaintext body
    html: text// html body
    };
    transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
    });
    response.end('email ok');
});


// 监听端口
server.listen(port, function (error) {
  if (error) throw error
      console.log('Server is running at localhost:' + port)
})



