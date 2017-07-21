var express = require('express');
var router = express.Router();
// var nodemailer = require('nodemailer');

/* GET menu page. */
router.get('/', function(req, res, next) {
  res.render('success', { title: 'Success' });
});

module.exports = router;
//
// function sendOrder(req, res) {
//   var transporter = nodemailer.createTransport({
//     service: 'Gmail'
//     auth: {
//       user: 'beandustespresso@gmail.com',
//       pass: 'igeekallweek'
//     }
//   })
// };
//
// var text='You received a new order!' + req.body.name;
//
// var mailOptions = {
//   from: 'beandustespresso@gmail.com',
//   to: 'joelaguerra1@gmail.com',
//   subject: 'New order!',
//   text: text
// };
//
// transporter.sendMail(mailOptions, function(error, info) {
//   if ( error ) {
//   }
//   else {
//     console.log('Message sent: ' + info.response);
//     res.json({ yo: info.response })
//   }
// });
