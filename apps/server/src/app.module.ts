import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { AuthJwtModule } from './auth-jwt/auth-jwt.module';
import { AlbumsModule } from './albums/albums.module';

const DB_HOST =
  'mongodb+srv://admin:admin@cluster0.p0yq6qi.mongodb.net/?retryWrites=true&w=majority';

@Module({
  imports: [
    ConfigModule.forRoot(), // Importa el ConfigModule sin argumentos
    MongooseModule.forRoot(DB_HOST), // Ejemplo de uso de una variable de entorno

    AuthJwtModule,
    AlbumsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('user');
  }
}
