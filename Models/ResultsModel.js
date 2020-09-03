/**
   * This is for the Results Model. {@link link
    name}
    * @author Author/Ntokungwia Zidane
    * @date Aug 10/2020
    * Contributors : contributor name,
 **/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var emailSchema = new Schema({
  price:  String, 
  name:  String, 
  phone:  String, 
  email:  String, 
  platform:  String, 
  sector:  String, 
  date: { type: Date, default: Date.now },
  response: [Schema.Types.Mixed]
});

module.exports = mongoose.model('results',emailSchema);