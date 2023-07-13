import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlaylistDto } from 'src/dto/dto-playlist/create-playlist.dto';
import { UpdatePlaylistDto } from 'src/dto/dto-playlist/update-playlist.dto';
import { Playlist, PlaylistDocument } from 'src/schemas/playlist.schema';

@Injectable()
export class PlaylistService {
  constructor(
    @InjectModel(Playlist.name) private playlistModel: Model<Playlist>,
  ) {}

  async findAllPlaylist(): Promise<Playlist[]> {
    return this.playlistModel.find().populate({ path: 'songs', model: 'Song' });
  }

  async createPlaylist(
    createPlaylist: CreatePlaylistDto,
  ): Promise<PlaylistDocument> {
    const newPlaylist: PlaylistDocument = await this.playlistModel.create(
      createPlaylist,
    );
    return newPlaylist;
  }

  async findOnePlaylist(id: string): Promise<PlaylistDocument> {
    return await this.playlistModel
      .findById(id)
      .populate({ path: 'songs', model: 'Song' })
      .exec();
  }

  async deletePlaylist(id: string): Promise<PlaylistDocument> {
    return this.playlistModel.findByIdAndDelete(id);
  }

  async updatePlaylist(
    id: string,
    updatePlaylistDto: UpdatePlaylistDto,
  ): Promise<Playlist> {
    return this.playlistModel
      .findByIdAndUpdate(id, updatePlaylistDto, {
        new: true,
      })
      .populate({ path: 'songs', model: 'Song' });
  }
}
