import { Schema, model } from "mongoose";

const movieSchema = new Schema({
  name: { type: String, required: true },
  release_date: { type: Date, required: true },
  director: { type: String, required: true },
  classification: {
    type: String,
    enum: ["Livre", "Maior16", "Maior18"],
    required: true,
  },
});

movieSchema.virtual("min_age").get(function () {
  switch (this.classification) {
    case "Livre":
      return 0;
    case "Maior16":
      return 16;
    case "Maior18":
      return 18;
    default:
      return 0;
  }
});

const Movie = model("Movie", movieSchema);

export default Movie;
