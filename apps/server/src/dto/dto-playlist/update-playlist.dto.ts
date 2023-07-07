import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class UpdatePlaylistDto {
  @IsString()
  songs?: string;

  @IsNumber()
  duration?: number;

  @IsString()
  name?: string;

  @IsString()
  description?: string;

  @IsString()
  image?: string;

  @IsDateString()
  creationDate?: Date;
}
