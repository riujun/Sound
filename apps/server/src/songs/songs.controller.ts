import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSongDto } from 'src/dto/create-song.dto';
import { SongsService } from './songs.service';
import { PaginationQueryDto } from 'src/dto/pagination-query.dto';

@ApiTags('Songs')
@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  async getAllSongs(@Query() pagination: PaginationQueryDto, @Res() res) {
    try {
      const songs = await this.songsService.getAllSongs(pagination);
      return res.status(HttpStatus.OK).json(songs);
    } catch (err) {
      return res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('/create')
  async createSong(@Body() createSongDto: CreateSongDto, @Res() res) {
    try {
      const {
        name,
        duration,
        user,
        coArtist,
        price,
        genre,
        image,
        date,
        album,
      } = createSongDto;
      const song = await this.songsService.createSong({
        name,
        duration,
        user,
        coArtist,
        price,
        genre,
        image,
        date,
        album,
      });
      return res.status(HttpStatus.OK).json({ song });
    } catch (err) {
      console.log(err);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ err });
    }
  }

  @Put(':id')
  async updateSong(
    @Param('id') id: number,
    @Body() body: any,
    @Res() res: any,
  ) {
    try {
      const song = await this.songsService.updateSong(id, body);
      return res.status(HttpStatus.OK).json({ song });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });
    }
  }

  @Delete(':id')
  async deleteSong(@Param('id') id: number, @Res() res: any) {
    try {
      await this.songsService.deleteSong(id);
      return res
        .status(HttpStatus.OK)
        .json(`La cancion con ${id} ha sido eliminada`);
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });
    }
  }
}
