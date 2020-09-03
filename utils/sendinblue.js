module.exports.sendToSendingBlue = function (data) {
  const request = require("request");
    console.log("language", data);
    let id= 6
    if (data.english != true) {
        id = 7
    }
  const options = {
    method: "POST",
    url: "https://api.sendinblue.com/v3/contacts",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key":
        "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",
    },
    body: {
      updateEnabled: false,
      email: data.email,
      listIds: [id],
      attributes: {
        firstname: data.name,
        lastname: " ",
        sms: "+"+data.phone,
      },
    },
    json: true,
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
  });
};
