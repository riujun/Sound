import {
  Controller,
  Body,
  Res,
  HttpStatus,
  Get,
  Delete,
  Put,
  Param,
  Query,
} from '@nestjs/common';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { UserService } from './user.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { PaginationQueryDto } from 'src/dto/pagination-query.dto';
import { GetArtirtsFilterDto } from 'src/dto/get-artists-filter.dto';
import { SongsService } from 'src/songs/songs.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly songService: SongsService,
  ) {}

  @ApiOperation({ summary: 'Obtener todos los usuarios.' })
  @Get()
  async getAll(@Res() res) {
    try {
      const users = await this.userService.getAll();
      return res.status(HttpStatus.OK).json(users);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }
  }

  @ApiOperation({ summary: 'Busqueda de artistas y canciones' })
  @Get('/search')
  async getAllArtits(
    @Query() pagination: PaginationQueryDto,
    @Query() { search }: GetArtirtsFilterDto,
    @Res() res,
  ) {
    try {
      const users = await this.userService.getAllArtist(pagination);
      let songs = await this.songService.getAllSongs(pagination);
      let artistUsers = users.filter((user) => user.artist === true);
      if (search) {
        const searchLowerCase = search.toLowerCase();
        (artistUsers = artistUsers.filter((artist) =>
          artist.name.toLowerCase().includes(searchLowerCase),
        )),
          (songs = songs.filter((song) =>
            song.name.toLowerCase().includes(searchLowerCase),
          ));
      }
      return res.status(HttpStatus.OK).json({ ...songs, ...artistUsers });
    } catch (error) {
      console.log(error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }
  }

  @ApiParam({ name: 'id', description: 'ID del user' })
  @ApiOperation({ summary: 'Obtener un usuario por su id' })
  @Get(':id')
  async getById(@Param('id') id: string, @Res() res) {
    try {
      const user = await this.userService.getById(id);
      if (!user) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'User not found' });
      }
      return res.status(HttpStatus.OK).json(user);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }
  }

  @ApiParam({ name: 'id', description: 'ID del user a eliminar' })
  @ApiOperation({ summary: 'Borrar un usuario por su id' })
  @Delete(':id')
  async deleteById(@Param('id') id: string, @Res() res) {
    try {
      const deletedUser = await this.userService.deleteById(id);
      if (!deletedUser) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'User not found' });
      }
      return res.status(HttpStatus.OK).json(deletedUser);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }
  }

  @ApiParam({ name: 'id', description: 'ID del user a actualizar' })
  @ApiOperation({ summary: 'Actualizar un usuario por su id' })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() res,
  ) {
    try {
      const updatedUser = await this.userService.updateById(id, updateUserDto);
      if (!updatedUser) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'User not found' });
      }
      return res.status(HttpStatus.OK).json(updatedUser);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }
  }
}
