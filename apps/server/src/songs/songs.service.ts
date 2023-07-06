import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Song } from 'src/schemas/song.schema';
import mongoose, { Model } from 'mongoose';
import { CreateSongDto } from 'src/dto/create-song.dto';
import { UpdateSongDto } from 'src/dto/update-songs';

@Injectable()
export class SongsService {
  constructor(@InjectModel(Song.name) private songModel: Model<Song>) {}

  async getAllSongs(): Promise<Song[]> {
    return this.songModel.find().exec();
  }

  async createSong(createSong: CreateSongDto): Promise<Song | null> {
    const newSong = new this.songModel(createSong);
    console.log(newSong);
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
}
