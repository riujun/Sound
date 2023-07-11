import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop({ default: false })
  artist: boolean;

  @Prop({ unique: true })
  username: string;

  @Prop({
    default:
      'https://asset.cloudinary.com/dnemqmc7a/05b35cf73934f1746f6a2845259369f5',
  })
  profilePhotoUrl: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
