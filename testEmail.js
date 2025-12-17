const nodemailer = require('nodemailer');

async function createTestEmail() {
  let testAccount = await nodemailer.createTestAccount();
  console.log(testAccount);
}

createTestEmail();
