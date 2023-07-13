import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAlbumDto {
  @ApiProperty()
  @IsOptional()
  @IsArray()
  canciones: string[];
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  duracion: number;
  @ApiProperty()
  @IsOptional()
  @IsString()
  nombre: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  descripcion: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  imagen: string;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  precio: number;
  @ApiProperty()
  @IsOptional()
  @IsString()
  usuario: string;
}
