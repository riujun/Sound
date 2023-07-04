import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import * as autoIncrement from 'mongoose-plugin-autoinc';
@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  id: number;
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  surname: string;

  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: true })
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.plugin(autoIncrement.plugin, {
  model: 'User',
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});
