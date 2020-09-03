/**
   * This is for the platfroms Model. {@link link
    name}
    * @author Author/Ntokungwia Zidane
    * @date Aug 10/2020
    * Contributors : contributor name,
 **/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var platformSchema = new Schema({
  base_price:  String,
  name: String, 
  date: { type: Date, default: Date.now },
  questions: [Schema.Types.Mixed],
  sector_id: Schema.Types.ObjectId,
  image: String
});

module.exports = mongoose.model('platforms',platformSchema);