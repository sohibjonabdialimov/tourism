const City = require('../models/City');

exports.getAllCities = async (req, res) => {
  try {
    const cities = await City.find({}, 'name mainImage shortDescription'); // faqat kerakli fieldlar
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

exports.getCityById = async (req, res) => {
  try {
    const city = await City.findById(req.params.id);

    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }

    res.status(200).json(city);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

exports.createCity = async (req, res) => {
  try {
    const { name, shortDescription, title, fullDescription, youtubeLink, mapLink, infoSections } = req.body;

    const mainImage = req.file ? req.file.path : null;

    const city = new City({
      name,
      shortDescription,
      title,
      fullDescription,
      youtubeLink,
      mapLink,
      mainImage,
      infoSections: infoSections ? JSON.parse(infoSections) : []
    });

    await city.save();
    res.status(201).json(city);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error });
  }
};


exports.updateCity = async (req, res) => {
  try {
    const updatedCity = await City.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedCity) {
      return res.status(404).json({ message: 'City not found' });
    }

    res.status(200).json(updatedCity);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error });
  }
};

exports.deleteCity = async (req, res) => {
  try {
    const deletedCity = await City.findByIdAndDelete(req.params.id);

    if (!deletedCity) {
      return res.status(404).json({ message: 'City not found' });
    }

    res.status(200).json({ message: 'City deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
