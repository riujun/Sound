import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateSongDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  duration?: number;
  @ApiProperty()
  @IsOptional()
  @IsString()
  user?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  coArtist?: string;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  price?: number;
  @ApiProperty()
  @IsOptional()
  @IsString()
  genre?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  image?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  date?: Date;
  @ApiProperty()
  @IsOptional()
  @IsString()
  album?: string;
}
