/**
   * This is for the user routes. {@link link
    name}
    * @author Author/Ntokungwia Zidane
    * @date Aug 10/2020
    * Contributors : contributor name,
 **/

const express = require("express");
const router = express.Router();

// importing the user controller

const userController = require("../Controllers/User");
/**
 * for Email
post request.
Endpoint: user/email

**/
router.post("/email", (req, res) => {
  const data = {};
  // validation
  console.log(req.body);
  if (req.body.email != undefined) {
    data.email = req.body.email;
    userController.SaveEmail(res, data);
  }
});
/**
 * For results
 * post request.
 * Endpoint: user/results
 **/
router.post("/results", (req, res) => {
  const data = {};
  // validation
  data.sector = req.body.sector;
  data.price = req.body.price;
  data.phone = req.body.phone;
  data.email = req.body.email;
  data.name = req.body.name;
  data.platform = req.body.platform;
  data.response = req.body.response;
  data.english = req.body.english;
  data.sendtoemail = req.body.sendtoemailt;
  userController.SaveResults(res, data);
});

/**
 * For Getting all sectors
 * get request.
 * Endpoint: user/sectors
 **/
router.get("/sectors", (req, res) => {
  userController.getAllSectors(res);
});

/**
 * For Getting  platforms for a particular sector
 * get request.
 * Endpoint: user/platforms/:sectorId
 **/
router.get("/platforms/:sectorId", (req, res) => {
  let id = req.params.sectorId;
  console.log(id);
  userController.getPlatforms(res, id);
});

/**
 * For Getting one platforms
 * get request.
 * Endpoint: user/questions/:platform_id
 **/
router.get("/questions/:platform_id", (req, res) => {
  let id = req.params.platform_id;
  console.log(id);
  userController.getQuestions(res, id);
});

// Post  a message(proposition)

router.post("/message", (req, res) => {
  const data = {};
  // validation

  data.email = req.body.email;
  data.subject = req.body.subject;
  data.message = req.body.message;
  data.phone = req.body.phone;
  userController.SaveMessages(res, data);
});

module.exports = router;
