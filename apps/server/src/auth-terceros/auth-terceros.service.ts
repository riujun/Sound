// src/auth-terceros/auth-terceros.service.ts
import { InjectModel } from '@nestjs/mongoose';

import { Injectable } from '@nestjs/common';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthTercerosService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOrCreateUserFromGoogleProfile(profileData: {
    googleId: string;
    name: string;
    email: string;
    image: string;
  }) {
    const { googleId, name, email, image } = profileData;

    // Buscar al usuario por el ID de Google en la base de datos
    let user = await this.userModel.findById(googleId);

    if (!user) {
      // Si el usuario no existe, crear uno nuevo utilizando el esquema User
      user = await this.userModel.create({
        name,
        email,
        image,
        // Otros campos según el esquema User que puedas tener
      });
    }

    return user;
  }
}
