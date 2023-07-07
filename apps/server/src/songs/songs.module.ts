import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Song, SongSchema } from 'src/schemas/song.schema';

@Module({
  providers: [SongsService],
  controllers: [SongsController],
  imports: [
    MongooseModule.forFeature([{ name: Song.name, schema: SongSchema }]),
  ],
})
export class SongsModule {}
