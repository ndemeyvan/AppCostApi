/**
   * This is for the Admin Controler. {@link link
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

const { query } = require("express");
const MessageModel = require("../Models/MessageModel");

/*** A function used to get  sectors from the database
 *
 * @param res - the response object
 * @return has no return value
 *
 * */
module.exports.getSectors = (res) => {
  let sector = sectorModel.find((err, doc) => {
    if (err) {
      res.json(false);
    } else {
      res.json(doc);
    }
  });
};

/*** A function used to make a new sector from the database
 *
 * @param res - the response object
 * @param data - the data object
 * @return has no return value
 *
 * */
module.exports.saveSectors = (res, data) => {
  let sector = new sectorModel(data);
  console.log(data);
  sector.save((err, doc) => {
    if (err) {
      res.json(false);
    } else {
      res.json({ status: true, id: doc._id });
    }
  });
};

/*** A function used to dellete a sector from the database
 *
 * @param res - the response object
 * @param id - the id of the sector
 * @return has no return value
 *
 * */
module.exports.removeSector = (res, id) => {
  let sector = sectorModel.findByIdAndDelete(id, (err, doc) => {
    if (err) {
      res.json({ message: "error occured" });
    } else {
      if (doc != null) {
        res.json({ message: true });
      } else {
        res.json({ message: false });
      }
    }
  });
};

/*** A function used to edit a sector in the database
 *
 * @param res - the response object
 * @param data - the data object of the sector
 * @param id - the id of the sector
 * @return has no return value
 *
 * */
module.exports.editSector = (res, data, id) => {
  let sector = sectorModel.findByIdAndUpdate(id, data, (err, doc) => {
    if (err) {
      res.json(false);
    } else {
      res.json(true);
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
  //5f327a717954f234ae263a2d
  // let pl = platformsModel.find((err, doc) => {
  //   if (err) {
  //     res.json(false);
  //   } else {
  //     res.json(doc);
  //   }
  // });
  // get all platforms having that sector id here
  let platform = platformsModel.find({ sector_id: id }, (err, doc) => {
    if (err) {
      res.json({ message: false });
    } else {
      res.json(doc);
      console.log(doc);
    }
  });
};

/*** A function used to dellete a platform from the database
 *
 * @param res - the response object
 * @param id - the id of the sector
 * @return has no return value
 *
 * */
module.exports.removePlatform = (res, id) => {
  // dellete the sector here
  let platform = platformsModel.findByIdAndDelete(id, (err, doc) => {
    if (err) {
      res.json({ message: "error occured" });
    } else {
      if (doc != null) {
        res.json({ message: true });
      } else {
        res.json({ message: false });
      }
    }
  });
};

/*** A function used to edit a platform in the database
 *
 * @param res - the response object
 * @param data - the data object of the platform
 * @return has no return value
 *
 * */
module.exports.editPlatform = (res, data, id) => {
  let platform = platformsModel.findByIdAndUpdate(id, data, (err, doc) => {
    if (err) {
      res.json(false);
    } else {
      res.json(true);
    }
  });
};

/*** A function used to make a new platform from the database
 *
 * @param res - the response object
 * @param data - the data object
 * @return has no return value
 *
 * */
module.exports.savePlatform = (res, data) => {
  console.log(data);

  let platform = new platformsModel(data);
  platform.save((err, doc) => {
    if (err) {
      res.json(false);
    } else {
      res.json({ id: doc._id, status: true });
    }
  });
};

// Questions

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

/*** A function used to dellete a question from the database
 *
 * @param res - the response object
 * @param id - the id of the sector
 * @return has no return value
 *
 * */
module.exports.removeQuestion = (res, id) => {
  let question = questionModel.findByIdAndDelete(id, (err, doc) => {
    if (err) {
      res.json({ message: "error occured" });
    } else {
      if (doc != null) {
        res.json({ message: true });
      } else {
        res.json({ message: false });
      }
    }
  });
};

/*** A function used to edit a question in the database
 *
 * @param res - the response object
 * @param data - the data object of the question
 * @return has no return value
 *
 * */
module.exports.editQuestion = (res, data, id) => {
  // edit the platform here
  let question = questionModel.findByIdAndUpdate(id, data, (err, doc) => {
    if (err) {
      res.json(false);
    } else {
      res.json(true);
    }
  });
};

/*** A function used to make a new question from the database
 *
 * @param res - the response object
 * @param data - the data object
 * @return has no return value
 *
 * */
module.exports.saveQuestion = (res, data) => {
  let question = new questionModel(data);
  question.save((err, doc) => {
    if (err) {
      res.json(false);
    } else {
      res.json({ status: true, id: doc._id });
      console.log(doc);
    }
  });
};

// get emails

/*** A function get al emails from the database
 *
 * @param res - the response object
 * @param start - the start index
 * @param size - the enumber of items needede
 * @return has no return value
 *
 * */
module.exports.getEmails = (res, start, size) => {
  console.log(start, size);
  let pageNumber = parseInt(start);
  let sizeNumber = parseInt(size);
  let emails = resultsModel.find(
    {},
    {},
    { limit: sizeNumber * 1, skip: (pageNumber - 1) * sizeNumber },
    (err, doc) => {
      if (err) {
        res.json({ message: "false" });
      } else {
        let data = {};
        resultsModel.find().countDocuments((err, num) => {
          data.total = num;
          data.page = pageNumber;
          data.size = sizeNumber;
          data.totalNumberOfPages = Math.ceil(num / size);
          data.data = doc;
          res.json(data);
        });
      }
    }
  );
};

/*** A function used to delete the email from the database
 *
 * @param res - the response object
 * @param id - the id of the email
 * @return has no return value
 *
 * */
module.exports.removeEmail = (res, id) => {
  let emails = resultsModel.findByIdAndDelete(id, (err, doc) => {
    if (err) {
      res.json({ message: "error occurede" });
    } else {
      if (doc != null) {
        res.json({ message: true });
      } else {
        res.json({ message: false });
      }
    }
  });
};

// get results

/*** A function get al results from the database
 *
 * @param res - the response object
 * @return has no return value
 *
 * */
module.exports.getResults = (res) => {
  let results = resultsModel.find((err, doc) => {
    if (err) {
      res.json({ message: "false" });
    } else {
      res.json(doc);
    }
  });
};

// Authentictoin methods

/*** A function get the admin from the database
 *
 * @param res - the response object
 * @param data - the username and password object
 * @return has no return value
 *
 * */
module.exports.login = (res, data) => {
  // save the data here
  data.status = true;
  res.json(data);
};

/*** A function to logout admin
 *
 * @param res - the response object
 * @param data - the username and password object
 * @return has no return value
 *
 * */
module.exports.logout = (res, data) => {
  // save the data here
  res.json({ message: "user logout" });
};

// get messages

/*** A function get all messages from the database
 *
 * @param res - the response object
 * @return has no return value
 *
 * */
module.exports.getMessages = (res) => {
  let messages = MessageModel.find((err, doc) => {
    if (err) {
      res.json({ message: "false" });
    } else {
      res.json(doc);
    }
  });
};

/*** A function used to dellete a message from the database
 *
 * @param res - the response object
 * @param id - the id of the message
 * @return has no return value
 *
 * */
module.exports.removeMessage = (res, id) => {
  let message = MessageModel.findByIdAndDelete(id, (err, doc) => {
    if (err) {
      res.json({ message: "error occured" });
    } else {
      if (doc != null) {
        res.json({ message: true });
      } else {
        res.json({ message: false });
      }
    }
  });
};
