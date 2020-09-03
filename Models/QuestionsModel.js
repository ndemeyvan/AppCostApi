/**
   * This is for the questions Model. {@link link
    name}
    * @author Author/Ntokungwia Zidane
    * @date Aug 10/2020
    * Contributors : contributor name,
 **/

var mongoose = require("mongoose");
const { schema } = require("./EmailModel");
var Schema = mongoose.Schema;

/****** Old questionsShema **********/
/* var questionsSchema = new Schema({
  title:  String, 
  date: { type: Date, default: Date.now },
  platform_id: Schema.Types.ObjectId,
  answers: [Object],
});
 */

var questionsSchema = new Schema({
  date: { type: Date, default: Date.now },
  platform_id: Schema.Types.ObjectId,
  answers: Object,
});

module.exports = mongoose.model("questions", questionsSchema);