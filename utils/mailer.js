"use strict";
module.exports.mailer = function (data) {
  const nodemailer = require("nodemailer");
  let info = {
    platform: data.platform,
    price: data.price,
    sector: data.sector,
    name: data.name
  }

  function responseToHtml() {
    let html = ``;
    data.response.forEach((quesAan) => {
      html+= ` <tr>
          <td>${quesAan.question}</td>
          <td>${quesAan.answer.title}</td>
          <td>${quesAan.answer.price}</td>
        </tr>`
    })
    console.log(html)
    return html;
  }
  responseToHtml()
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      //  port: 587,
      // secure: false, // true for 465, false for other ports
      auth: {
        user: "ntokungwiazidane@gmail.com", // generated ethereal user
        pass: "Mama7244", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "ntokungwiazidane@gmail.com", // sender address
      to:data.email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body
    class="mt-100"
    id="content"
    style="
      font-family: Montserrat;
      padding-left: 200px;
      padding-right: 200px;
    "
    ;
  >
    <header >
      <h4
        class="title"
        style="font-size: 25px; margin: 30px 30px 30px; margin-top: 110px; text-align: center;"
        ;
      >
        Dear ${data.name}, thanks for using our platform.Here's the
        informations about your app cost
      </h4>
    </header>
    <!-- table-->
    <div
      class=""
      
    >
      <div class="mid-table" style="display: flex; justify-content: space-between;">
       <div>
        <h4>
            Selected Sector:
            <span style="color: #1a9e8e; font-weight: bold;">${data.sector}</span>
          </h4>
          <p style="float: left;  margin-top: 0px;">
            Date:
            <span style="color: #1a9e8e; font-weight: bold;">22 August 2020</span>
          </p>
       </div>
      </div>
      <div style="margin-top: 15px">
        <h4>
          Selected Platform:
          <span style="color: #1a9e8e; font-weight: bold;">${data.platform}</span>
        </h4>
        <p>
          Total :
          <span style="color: #1a9e8e; font-weight: bold;">${data.price}XAF</span>
        </p>
      </div>
    </div>
    <div class="table">
      <table
        style="
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        "
      >
        <tr>
          <th
            style="
              background-color: #1a9e8e;
              color: white;
              border: 1px solid #dddddd;
              padding: 8px;
              font-weight: bold;
            "
          >
            Question
          </th>
          <th
            style="
              background-color: #1a9e8e;
              color: white;
              border: 1px solid #dddddd;
              padding: 8px;
              font-weight: bold;
            "
          >
            Response
          </th>
          <th
            style="
              background-color: #1a9e8e;
              color: white;
              border: 1px solid #dddddd;
              padding: 8px;
              font-weight: bold;
            "
          >
            Price
          </th>
        </tr>
       ${responseToHtml()}
      </table>
    </div>
    <!-- end of table-->
    <!-- button-->
    <div class="text-center my-5" style=" text-align: center;">
      <button
        class="btn btn-lg text-center"
        style="
          border: 2px solid #1a9e8e;
          background-color: #1a9e8e;
          color: white;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          font-family: Montserrat;
          justify-content: center;
          margin-bottom: 20px;
          margin-top: 50px;
          width: 30%;
        "
      >
        join us
      </button>
    </div>
    <!-- end of button-->
    <footer>
      <!-- footer section-->
      <!-- logo-->
      <div  style=" text-align: center;">
        <div class=" ">
          <img src="/img/logo2.png " alt="logo " width="200px " class="logo" style=" text-align: center;" />
        </div>
      </div>
    </footer>
    <!-- built files will be auto injected -->
    <script
      src="https://kit.fontawesome.com/77f730218d.js "
      crossorigin="anonymous "
    ></script>
  </body>
</html>
`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(console.error);

}
