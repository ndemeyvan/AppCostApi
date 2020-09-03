/**
   * This is for the user Controler. {@link link
    name}
    * @author Author/Ntokungwia Zidane
    * @date Aug 10/2020
    * Contributors : contributor name,
 **/

// models imports
const emailModel = require("../Models/EmailModel");
const resultsModel = require("../Models/ResultsModel");
const sectorModel = require("../Models/SectorModel");
const platformsModel = require("../Models/PlatformsModel");
const questionModel = require("../Models/QuestionsModel");
const messagesModel = require("../Models/MessageModel");
const MessageModel = require("../Models/MessageModel");
const mailer = require("../utils/mailer");
const sendinBlueMailer = require('../utils/sendinblue');
/*** A function used to save emails into the database
 * 
 * @param res - the response object
 * @param data - the  object contain
  // MessageModel.watch({}).on('change',(doc)=>{
  //   console.log(doc,'dsfsdfdsfdf');
  // })

    res.json(false)
  }
  else{
    res.json(true);
  }
});

};

/*** A function used to save emails into the database
 * 
 * @param res - the response object
 * @param data - the  object containing the email
 * @return has no return value
 * 
 * */
module.exports.SaveResults = (res, data) => {
  sendinBlueMailer.sendToSendingBlue(data);
  if (data.sendtoemail == true) {
    mailer.mailer(data);
 }
  let results = new resultsModel(data);

  results.save((err, doc) => {
    if (err) {
      res.json(false);
    } else {
      res.json(true);
    }
  });
};

/*** A function used to get all sectors from the database
 * @param res - the response object
 * @return has no return value
 *
 * */
module.exports.getAllSectors = (res) => {
  // platformsModel.deleteMany({},(s)=>{
  //   if(s){}
  // })
  let sector = sectorModel.find({ active: true }, (err, doc) => {
    if (err) {
      res.json(false);
    } else {
      res.json(doc);
    }
  });
};

/*** A function used to get a all platforms under a  sector from the database
 * @param res - the response object
 * @param id - the id of the sector
 * @return has no return value
 *
 * */
module.exports.getPlatforms = (res, id) => {
  // get all platforms having that sector id here
  let platform = platformsModel.find({ sector_id: id }, (err, doc) => {
    if (err) {
      res.json({ message: false });
    } else {
      res.json(doc);
    }
  });
};

/*** A function used to get a all questions under a  platform from the database
 * @param res - the response object
 * @param id - the id of the platform
 * @return has no return value
 *
 * */

module.exports.getQuestions = (res, id) => {
  // get all questions having that platform id here
  let question = questionModel.find({ platform_id: id }, (err, doc) => {
    if (err) {
      res.json({ message: false });
    } else {
      res.json(doc);
    }
  });
};

/*** A function used to save messages into the database
 *
 * @param res - the response object
 * @param data - the  object containing the email
 * @return has no return value
 *
 * */
module.exports.SaveMessages = (res, data) => {
  let results = new MessageModel(data);
  //console.log(data)
  results.save((err, doc) => {
    if (err) {
      res.json(false);
    } else {
      res.json(true);
    }
  });
};
