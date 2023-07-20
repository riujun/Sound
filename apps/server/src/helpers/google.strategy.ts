import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback, Profile } from 'passport-google-token';
import { AuthTercerosService } from '../auth-terceros/auth-terceros.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google-token') {
  constructor(private readonly authService: AuthTercerosService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ) {
    // Aquí validaremos o crearemos el usuario en la base de datos utilizando AuthService
    const user = await this.authService.findOrCreateUserFromGoogleProfile(
      profile,
    );
    return done(null, user);
  }
}
