import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MinLength,
  Matches,
  IsEmail,
  IsNotEmpty,
} from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    description: 'Nombre de la canción',
    example: 'Came up',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    {
      message:
        'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial.',
    },
  )
  password: string;
}
