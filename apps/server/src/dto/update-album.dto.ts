import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAlbumDto {
  @IsOptional()
  @IsArray()
  canciones: string[];

  @IsOptional()
  @IsNumber()
  duracion: number;

  @IsOptional()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion: string;

  @IsOptional()
  @IsString()
  imagen: string;

  @IsOptional()
  @IsNumber()
  precio: number;

  @IsOptional()
  @IsString()
  usuario: string;
}
