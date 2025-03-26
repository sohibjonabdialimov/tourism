const mongoose = require('mongoose');

const InfoSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [String] // optional
});

const CitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  mainImage: { type: String, required: true },
  shortDescription: { type: String, required: true },
  title: { type: String }, // for detailed view
  fullDescription: { type: String },
  youtubeLink: { type: String },
  mapLink: { type: String },
  infoSections: [InfoSectionSchema], // optional sections like food, history, etc.
}, { timestamps: true });

module.exports = mongoose.model('City', CitySchema);
