import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ timestamps: true })
export class Album {
  @Prop({ required: true, unique: false }) canciones: string[];
  @Prop({ required: true, unique: false }) duracion: number;
  @Prop({ required: true, unique: true }) nombre: string;
  @Prop({ required: true, unique: false }) nombreArtista: string;
  @Prop({ required: true, unique: false }) descripcion: string;
  @Prop({ required: true, unique: false }) imagen: string;
  @Prop({ required: true, unique: false }) precio: number;
  @Prop({ type: Types.ObjectId, ref: 'UserSchema', required: true })
  user: string;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
