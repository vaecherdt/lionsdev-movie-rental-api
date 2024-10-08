import { Schema, model } from 'mongoose';

const rentedSchema = new Schema({
  rented_by: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  movie_rented: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
  rent_date: { type: Date, default: Date.now, required: true },
  return_date: { type: Date, required: true }
});

const Rented = model('Rented', rentedSchema);

export default Rented;