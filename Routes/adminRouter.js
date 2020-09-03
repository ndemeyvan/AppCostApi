/**
   * This is for the Admin routes. {@link link
    name}
    * @author Author/Ntokungwia Zidane
    * @date Aug 10/2020
    * Contributors : contributor name,
 **/

const express = require("express");
const router = express.Router();

const authMiddleWare = require("../middlewares/auth.middleware");
const adminController = require("../Controllers/Admin");

router.use(authMiddleWare);
/**
 * for getting all sectors
get request.
Endpoint: admin/sectors

**/
router.get("/sectors", (req, res) => {
  adminController.getSectors(res);
});

/**
 * for adding a sector
post request.
Endpoint: admin/sectors

**/
router.post("/sectors", (req, res) => {
  let data = {};
  data.title = req.body.title;
  data.desc = req.body.desc;
  data.platforms = req.body.platforms;
  data.image_url = req.body.image_url;
  adminController.saveSectors(res, data);
});

/**
 * for delleting a sector
dellete request.
Endpoint: admin/sectors/:sector_id

**/
router.delete("/sectors/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  adminController.removeSector(res, id);
});

/**
 * for editing a sector
dellete request.
Endpoint: admin/sectors/:sector_id

**/
router.patch("/sectors/:id", (req, res) => {
  console.log(req.body);
  let data = {};
  if (req.body.title != null) {
    data.title = req.body.title;
  }
  if (req.body.desc != null) {
    data.desc = req.body.desc;
  }
  if (req.body.image_url != null) {
    data.image_url = req.body.image_url;
  }
  if (req.body.active != null) {
    data.active = req.body.active;
  }

  let id = req.params.id;
  adminController.editSector(res, data, id);
});

// platforms

/**
 * For Getting  platforms for a particular sector
 * get request.
 * Endpoint: admin/platforms/:sectorId
 **/
router.get("/platforms/:sectorId", (req, res) => {
  let id = req.params.sectorId;
  console.log(id);
  adminController.getPlatforms(res, id);
});

/**
 * For delleting  a platform
 * delete request.
 * Endpoint: admin/platforms/:id
 **/
router.delete("/platforms/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  adminController.removePlatform(res, id);
});

/**
 * for editing a platform
dellete request.
Endpoint: admin/platforms/:platform_id

**/
router.patch("/platforms/:id", (req, res) => {
  let data = {};
  data.name = req.body.name;
  data.base_price = req.body.base_price;
  data.image = req.body.image;
  let id = req.params.id;
  adminController.editPlatform(res, data, id);
});

/**
 * for adding a platform
post request.
Endpoint: admin/platforms

**/
router.post("/platforms", (req, res) => {
  let data = {};
  data.name = req.body.name;
  data.base_price = req.body.base_price;
  data.sector_id = req.body.sector_id;
  data.questions = req.body.questions;
  data.image = req.body.image;
  adminController.savePlatform(res, data);
});

// questions

/**
 * For Getting  questions for a particular sector
 * get request.
 * Endpoint: admin/questions/:platform_id
 **/
router.get("/questions/:platform_id", (req, res) => {
  let id = req.params.platform_id;
  console.log(id);
  adminController.getQuestions(res, id);
});

/**
 * For delleting  a question
 * delete request.
 * Endpoint: admin/questions/:id
 **/
router.delete("/questions/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  adminController.removeQuestion(res, id);
});

/**
 * for editing a question
dellete request.
Endpoint: admin/questions/:platform_id

**/
router.patch("/questions/:id", (req, res) => {
  let data = {};
  //console.log(req.body)
  data.title = req.body.title;
  data.answers = req.body.answers;
  let id = req.params.id;
  adminController.editQuestion(res, data, id);
});

/**
 * for adding a question
post request.
Endpoint: admin/questions

**/
router.post("/questions", (req, res) => {
  let data = {};
  //data.title = req.body.title;
  data.platform_id = req.body.platform_id;
  data.answers = req.body.answer;
  console.log(data);
  adminController.saveQuestion(res, data);
});

// emails
/** 
 * For Getting  emails
 * get request.
 * Endpoint: admin/emails
 **/
router.get("/emails", (req, res) => {
  //  res.send("edg");
  let start = req.query.page;
  let end = req.query.size;
  adminController.getEmails(res, start, end);
});

/**
 * For delleting  a user email
 * delete request.
 * Endpoint: admin/emails/:id
 **/
router.delete("/emails/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  adminController.removeEmail(res, id);
});

// results
/**
 * For Getting  results
 * get request.
 * Endpoint: admin/results
 **/
router.get("/results", (req, res) => {
  adminController.getResults(res);
});

// admin auth route

router.post("/login", (req, res) => {
  adminController.login(res, req.body);
});

router.post("/logout", (req, res) => {
  adminController.logout(res, req.body);
});

// messages
/**
 * For Getting  messages
 * get request.
 * Endpoint: admin/messages
 **/
router.get("/messages", (req, res) => {
  let start = req.query.page;
  let end = req.query.size;
  adminController.getMessages(res, start, end);
});

/**
 * For delleting  a message
 * delete request.
 * Endpoint: admin/messages/:id
 **/
router.delete("/messages/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  adminController.removeMessage(res, id);
});

module.exports = router;
