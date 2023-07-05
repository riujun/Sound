import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getAll(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async getById(id: any): Promise<User | null> {
    const user = this.userModel.findById({ id }).exec();
    return user;
  }
}
