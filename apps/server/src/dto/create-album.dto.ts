import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAlbumDto {
  @IsArray()
  @IsNotEmpty()
  canciones: string[];

  @IsNumber()
  @IsNotEmpty()
  duracion: number;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  imagen: string;

  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @IsString()
  @IsNotEmpty()
  usuario: string;
}
