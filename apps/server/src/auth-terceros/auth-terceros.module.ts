import { Module } from '@nestjs/common';
import { AuthTercerosController } from './auth-terceros.controller';
import { AuthTercerosService } from './auth-terceros.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from '../helpers/google.strategy';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../schemas/user.schema';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    ConfigModule.forRoot(), // Carga las variables de entorno globales desde .env
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthTercerosController],
  providers: [AuthTercerosService, GoogleStrategy, UserService],
})
export class AuthTercerosModule {}
