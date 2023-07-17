import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { v2 as cloudinary } from 'cloudinary';
import mongoose, { Model } from 'mongoose';
import { CreateSongDto } from 'src/dto/create-song.dto';
import { PaginationQueryDto } from 'src/dto/pagination-query.dto';
import { UpdateSongDto } from 'src/dto/update-songs';
import { Song } from 'src/schemas/song.schema';

@Injectable()
export class SongsService {
  constructor(@InjectModel(Song.name) private songModel: Model<Song>) {
    // cloudinary.config({
    //   cloud_name: 'dlvpftdsm',
    //   api_key: '359667715474286',
    //   api_secret: '9tNuIOwxI1MNhiMlpEu8-mpATPo',
    // });
  }

  async getAllSongs({ limit, offset }: PaginationQueryDto): Promise<Song[]> {
    return this.songModel.find().skip(offset).limit(limit).exec();
  }

  async getById(id: string): Promise<Song | null> {
    try {
      const song = this.songModel.findById(id).exec();
      return song;
    } catch (error) {
      console.log(error);
    }
  }

  async createSong(createSong: CreateSongDto): Promise<Song | null> {
    const newSong = new this.songModel(createSong);
    try {
      await newSong.save();
    } catch (error) {
      console.log(error);
    }
    return newSong;
  }

  async updateSong(id: number, song: UpdateSongDto) {
    return this.songModel.findByIdAndUpdate(id, song);
  }

  async deleteSong(id: number) {
    try {
      const objectId = new mongoose.Types.ObjectId(id);
      return this.songModel.deleteOne({ _id: objectId });
    } catch (error) {
      console.log(error);
    }
  }

  async uploadFile(file: Express.Multer.File): Promise<string> {
    // try {
    //   console.log('result')
    //   console.log(file)
    //   const result = await cloudinary.uploader.upload(file.path);
    //   console.log(result)
    //   // Aquí puedes realizar acciones adicionales, como guardar la URL en la base de datos
    //   return result.secure_url; // Retorna la URL del archivo subido
    // } catch (error) {
    //   // Maneja los errores de carga de archivos aquí
    //   return (error);
    // }

    try {
      const result = await new Promise<string>((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              resource_type: 'auto',
            },
            (error: any, result: any) => {
              if (error) {
                reject(error);
              } else {
                resolve(result.secure_url);
              }
            },
          )
          .end(file.buffer);
      });
      console.log(result);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
