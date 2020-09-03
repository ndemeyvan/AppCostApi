/**
   * This is for the email Model. {@link link
    name}
    * @author Author/Ntokungwia Zidane
    * @date Aug 10/2020
    * Contributors : contributor name,
 **/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var emailSchema = new Schema({
  email:  String, 
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('emails',emailSchema);