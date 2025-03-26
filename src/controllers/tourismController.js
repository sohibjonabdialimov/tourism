const Tourism = require('../models/Tourism');

// GET /api/tourism – get all tourism places (short list)
exports.getAllTourismPlaces = async (req, res) => {
  try {
    const places = await Tourism.find({}, 'title mainImage slug');
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// GET /api/tourism/:slug – get tourism place by slug
exports.getTourismBySlug = async (req, res) => {
  try {
    const place = await Tourism.findOne({ slug: req.params.slug });

    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }

    res.status(200).json(place);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// POST /api/tourism – create tourism place
exports.createTourismPlace = async (req, res) => {
  try {
    const place = new Tourism(req.body);
    await place.save();
    res.status(201).json(place);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error });
  }
};

// PUT /api/tourism/:slug – update by slug
exports.updateTourismPlace = async (req, res) => {
  try {
    const updated = await Tourism.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Place not found' });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error });
  }
};

// DELETE /api/tourism/:slug – delete by slug
exports.deleteTourismPlace = async (req, res) => {
  try {
    const deleted = await Tourism.findOneAndDelete({ slug: req.params.slug });

    if (!deleted) {
      return res.status(404).json({ message: 'Place not found' });
    }

    res.status(200).json({ message: 'Place deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
