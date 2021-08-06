import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';
import hobbiesModel from './hobbies.model';

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  hobbies: [{ type: Schema.Types.ObjectId, ref: hobbiesModel }],
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
