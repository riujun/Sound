import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PlaylistService } from '../playlist.service';
import { UpdatePlaylistDto } from 'src/dto/dto-playlist/update-playlist.dto';
import { CreatePlaylistDto } from 'src/dto/dto-playlist/create-playlist.dto';

@Controller('playlist')
export class PlaylistController {
  constructor(private playlistService: PlaylistService) {}

  @Get()
  findAllPlaylist() {
    return this.playlistService.findAllPlaylist();
  }

  @Get(':id')
  async findOnePlaylist(@Param('id') id: string) {
    const playlist = this.playlistService.findOnePlaylist(id);
    if (!playlist) throw new NotFoundException('Playlist does not exist');
    return playlist;
  }

  @Post()
  createPlaylist(@Body() body: CreatePlaylistDto) {
    try {
      return this.playlistService.createPlaylist(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Playlist already exist');
      }
      throw error;
    }
  }

  @Delete(':id')
  deletePlaylist(@Param('id') id: string) {
    const playlist = this.playlistService.deletePlaylist(id);
    if (!playlist) throw new NotFoundException('Playlist does not exist');
  }

  @Put(':id')
  async updatePlaylist(
    @Param('id') id: string,
    @Body() body: UpdatePlaylistDto,
  ) {
    const playlist = await this.playlistService.updatePlaylist(id, body);
    if (!playlist) throw new NotFoundException('Playlist does not exist!');
    return playlist;
  }

  @Put('/songadd/:id')
  async addSongToPlaylist(@Param('id') id: string, @Body() body: any) {
    const playlist = await this.playlistService.findOnePlaylist(id);
    if (!playlist) throw new NotFoundException('Playlist does not exist!');
    // const song = await this.songService.findOneSong(body)
    // playlist.songs.push(song)
    // playlist.save()
    // return playlist
    // console.log(playlist.songs)
  }

  @Put('/songdel/:id')
  async deleteSongFromPlaylist(@Param('id') id: string, @Body() body: any) {
    const playlist = await this.playlistService.findOnePlaylist(id);
    if (!playlist) throw new NotFoundException('Playlist does not exist!');
    // const song = await this.songService.findOneSong(body)
    // const playlistUpdated = playlist.songs.map(s => s._id !== song._id )
    // playlistUpdated.save()
    // return playlistUpdated
    // console.log(playlist.songs)
  }
}
