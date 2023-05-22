const nodemailer = require("nodemailer");

const config = require("./config.js");

export const transporter = nodemailer.createTransport({
  host: "simplesimonsafaris.com",
  secureConnection: false,
  tls: {
    rejectUnauthorized: false,
  },
  port: 587,
  auth: {
    user: config.simplesimonuser,
    pass: config.pass,
  },
});
