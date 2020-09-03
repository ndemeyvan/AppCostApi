/**
 * This is for the Sectors Model. {@link link name}
 * @author Author/Ntokungwia Zidane
 * @date Aug 10/2020
 * Contributors : contributor name,
 **/

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var sectorSchema = new Schema({
  date: { type: Date, default: Date.now },
  title: String,
  image_url: String,
  desc: String,
  active: Boolean,
  platforms: [Schema.Types.Mixed],
});

module.exports = mongoose.model("sector", sectorSchema);
