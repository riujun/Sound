import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { Song } from './song.schema';

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
      'https://res.cloudinary.com/dnemqmc7a/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1689019059/image_bahgnt.jpg?_s=public-apps',
  })
  profilePhoto: string;

  @Prop({ type: [{ type: Types.ObjectId }] })
  favoriteArtists: string[]; // Array de IDs de artistas favoritos

  @Prop({ unique: true })
  email: string;

  @Prop({
    default:
      'https://res.cloudinary.com/dnemqmc7a/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1689019059/image_bahgnt.jpg?_s=public-apps',
  })
  coverPhoto: string;

  @Prop()
  password: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Song' }] })
  songsPurchased: Song[];

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Song' }] })
  songsUplodaded: Song[];

  @Prop()
  description: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
