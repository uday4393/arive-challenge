import { model, Schema, Document } from 'mongoose';
import { Hobbies } from '@interfaces/hobbies.interface';

const hobbiesSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  passionLevel: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const hobbiesModel = model<Hobbies & Document>('Hobbies', hobbiesSchema);

export default hobbiesModel;
