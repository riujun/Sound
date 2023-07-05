import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { AuthJwtModule } from './auth-jwt/auth-jwt.module';
import { UserModule } from './user/user.module';
import { PlaylistModule } from './playlist/playlist.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Importa el ConfigModule sin argumentos
    MongooseModule.forRoot(
      `mongodb+srv://sebastiantorreiro:R1wbQ2SmKg4L3Vqj@soundawave.1sm8mt0.mongodb.net/?retryWrites=true&w=majority`,
    ), // Ejemplo de uso de una variable de entorno

    AuthJwtModule,
    UserModule,
    PlaylistModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('user');
  }
}
