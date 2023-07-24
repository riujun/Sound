import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { AlbumsService } from './albums.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Album, AlbumSchema } from 'src/schemas/album.schema';
import { ConfigModule } from '@nestjs/config';
import { User, UserSchema } from '../schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Album.name,
        schema: AlbumSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    ConfigModule,
  ],

  controllers: [AlbumsController],
  providers: [AlbumsService],
})
export class AlbumsModule {}
