import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MinLength,
  Matches,
  IsEmail,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  surname?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  username?: string;
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  artist?: boolean;
  @ApiProperty()
  @IsOptional()
  @IsEmail()
  email?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  @MinLength(8)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    {
      message:
        'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial.',
    },
  )
  password?: string;
}
