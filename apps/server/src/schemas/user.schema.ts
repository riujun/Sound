import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { Song } from './song.schema';
import { IsOptional } from 'class-validator';

@Schema({ timestamps: true })
export class User extends Document {
  @IsOptional() // Haciendo el campo "surname" opcional
  @Prop({ unique: true })
  googleId?: string; // Nuevo campo "googleId"

  @Prop({ required: true }) // Haciendo el campo "name" requerido
  name: string;

  @Prop()
  @IsOptional() // Haciendo el campo "surname" opcional
  surname?: string;

  @Prop({ default: false })
  @IsOptional() // Haciendo el campo "artist" opcional
  artist?: boolean;

  @Prop({ unique: true })
  @IsOptional() // Haciendo el campo "username" opcional
  username?: string;

  @Prop()
  @IsOptional()
  genre?: string;
  @IsOptional()
  @Prop()
  followers?: number;

  @Prop({
    default:
      'https://res.cloudinary.com/dnemqmc7a/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1689019059/image_bahgnt.jpg?_s=public-apps',
  })
  @IsOptional() // Haciendo el campo "profilePhoto" opcional
  profilePhoto?: string;

  @Prop({ type: [{ type: Types.ObjectId }] })
  @IsOptional() // Haciendo el campo "favoriteArtists" opcional
  favoriteArtists?: string[]; // Array de IDs de artistas favoritos

  @Prop({ type: [{ type: Types.ObjectId }] })
  @IsOptional() // Haciendo el campo "favoriteArtists" opcional
  followingArtists?: string[]; // Arreglo de IDs de los artistas seguidos por el usuario

  @Prop({ unique: true })
  @IsOptional() // Haciendo el campo "email" opcional
  email?: string;

  @Prop({
    default:
      'https://res.cloudinary.com/dnemqmc7a/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1689019059/image_bahgnt.jpg?_s=public-apps',
  })
  coverPhoto: string;

  @Prop()
  @IsOptional() // Haciendo el campo "password" opcional
  password?: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Song' }] })
  @IsOptional() // Haciendo el campo "songsPurchased" opcional
  songsPurchased?: Song[];

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Song' }] })
  @IsOptional() // Haciendo el campo "songsUplodaded" opcional
  songsUplodaded?: Song[];

  @Prop()
  @IsOptional()
  description?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
