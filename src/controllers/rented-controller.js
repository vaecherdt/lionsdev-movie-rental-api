import Rented from "../models/rented-model.js";

export const store = async (req, res) => {
  try {
    const rented = await Rented.create({
      rented_by: req.body.rented_by,
      movie_rented: req.body.movie_rented,
      rent_date: req.body.rent_date,
      return_date: req.body.return_date,
    });

    res.status(201).json(rented);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const rentedList = await Rented.find()
      .populate("rented_by", "name email")
      .populate("movie_rented", "name director")
      .exec();

    res.json(rentedList);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const show = async (req, res) => {
  try {
    const rented = await Rented.findById(req.params.id)
      .populate("rented_by", "name email")
      .populate("movie_rented", "name director")
      .exec();

    if (!rented) {
      return res.status(404).json({ error: "Rented record not found" });
    }

    res.json(rented);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const rented = await Rented.findByIdAndUpdate(
      req.params.id,
      {
        rented_by: req.body.rented_by,
        movie_rented: req.body.movie_rented,
        rent_date: req.body.rent_date,
        return_date: req.body.return_date,
      },
      { new: true, runValidators: true }
    ).exec();

    if (!rented) {
      return res.status(404).json({ error: "Rented record not found" });
    }

    res.json(rented);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const destroy = async (req, res) => {
  try {
    const rented = await Rented.findByIdAndDelete(req.params.id).exec();

    if (!rented) {
      return res.status(404).json({ error: "Rented record not found" });
    }

    res.json({ message: "Rented record deleted successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
};
