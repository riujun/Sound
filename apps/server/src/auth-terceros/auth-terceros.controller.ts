// src/auth-terceros/auth-terceros.controller.ts

import {
  Controller,
  Post,
  Request,
  UseGuards,
  Get,
  Req,
  Res,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GoogleStrategy } from '../helpers/google.strategy';
import { AuthTercerosService } from './auth-terceros.service';
import { UserSchema } from 'src/schemas/user.schema';
@Controller('auth-terceros')
export class AuthTercerosController {
  constructor(
    private readonly googleStrategy: GoogleStrategy,
    private readonly authService: AuthTercerosService,
  ) {}

  @Post('google/token')
  @UseGuards(AuthGuard('google-token'))
  async googleAuth(@Request() req: any) {
    // El usuario ya ha sido autenticado por la estrategia 'google-token'.
    // En este punto, req.user contiene la información del usuario autenticado con Google.

    // Acceder al token de acceso proporcionado por Google
    const accessToken = req.user.accessToken;

    // Extraer la información del perfil del usuario desde req.user.profile
    const { id, displayName, emails, photos } = req.user.profile;

    // Crear o buscar al usuario en la base de datos utilizando la información del perfil de Google
    const user = await this.authService.findOrCreateUserFromGoogleProfile({
      googleId: id,
      name: displayName,
      email: emails[0]?.value, // Utilizar el primer correo electrónico del array, si está disponible
      image: photos[0]?.value, // Utilizar la primera imagen de perfil del array, si está disponible
    });

    // El usuario ha sido creado o encontrado en la base de datos
    // Puedes retornar los datos del usuario y el token de acceso en la respuesta
    return {
      message: 'Usuario autenticado correctamente con Google',
      user,
      accessToken,
    };
  }

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google-token'))
  async googleAuthCallback(@Req() req: any, @Res() res: any) {
    // El usuario ha sido autenticado con éxito con Google
    // Redirigir al home
    res.redirect('/home');
  }
}
