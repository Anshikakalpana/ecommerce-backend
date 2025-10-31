// // verification.js
// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "anshikajain196872@gmail.com",
//     pass: "exql mdkx flmd zsfa", 
//   },
// });


// export async function sendEmail(email, verificationCode) {
//   try {
//     const mailOptions = {
//       from: "anshikajain196872@gmail.com",
//       to: email, 
//       subject: "Email Verification",
//       text: `Your verification code is ${verificationCode}`,
//       html: `<h3>Your verification code is <b>${verificationCode}</b></h3>`,
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log(" Email sent:", info.response);
//     return info;
//   } catch (err) {
//     console.error(" Error sending email:", err);
//     throw err;
//   }
// }
