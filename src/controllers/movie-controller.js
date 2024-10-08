import Movie from "../models/movie-model.js";

export const store = async (req, res) => {
  try {
    const movie = await Movie.create({
      name: req.body.name,
      release_date: req.body.release_date,
      director: req.body.director,
      classification: req.body.classification
    });

    res.status(201).json(movie);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const movies = await Movie.find().exec();
    res.json(movies);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const show = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).exec();
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        release_date: req.body.release_date,
        director: req.body.director,
        classification: req.body.classification,
      }).exec();

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const destroy = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id).exec();
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
};
