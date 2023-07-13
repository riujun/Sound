import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAlbumDto {
  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  canciones: string[];
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  duracion: number;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nombre: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  descripcion: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  imagen: string;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  precio: number;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  usuario: string;
}
