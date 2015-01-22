'use strict';

var express       = require('express');
var bodyparser    = require('body-parser');
var nodemailer    = require('nodemailer');
var port          = process.env.PORT || 3000;
var app           = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(express.static(__dirname + '/build'));

//Using Nodemailer for my "Contact" page.
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'PUT YOUR OWN EMAIL HERE',
    pass: 'PUT YOUR OWN PASSWORD HERE'
  }
});

//Sends me mail using nodemailer based on the text inputted in the boxes.
app.post('/contact', function(req, res) {
  var mailOptions = {
    from: 'NAME <YOUR EMAIL>',
    to: 'WHOEVER YOU WANT TO SEND TO',
    subject: 'New e-mail!',
    text: req.body.message + ' You may contact this sender at: ' +
    req.body.email + ' or at this number: ' + req.body.phone
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });
  //Uses Ajax to show this message once successfully sent.
  res.send("Thanks! Your message has been sent.");
});

app.listen(port, function() {
  console.log('Server is running on port ' + port);
});
