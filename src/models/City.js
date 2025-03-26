const mongoose = require('mongoose');

const InfoSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [String]
});

const CitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  mainImage: { type: String, required: true },
  shortDescription: { type: String, required: true },
  title: { type: String },
  fullDescription: { type: String },
  youtubeLink: { type: String },
  mapLink: { type: String },
  infoSections: [InfoSectionSchema],
}, { timestamps: true });

module.exports = mongoose.model('City', CitySchema);
