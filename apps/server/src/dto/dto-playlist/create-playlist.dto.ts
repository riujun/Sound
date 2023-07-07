import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class CreatePlaylistDto {
  @IsNotEmpty()
  @IsString()
  songs: string;

  @IsNumber()
  @IsNotEmpty()
  duration: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsString()
  @IsNotEmpty()
  user: string;
}
