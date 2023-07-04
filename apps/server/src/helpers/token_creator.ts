import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokenService {
  constructor(private configService: ConfigService) {}

  createToken(user: any): string {
    const payload = {
      sub: user.id,
      iat: moment().unix(),
      exp: moment().add(24, 'hours').unix(),
    };
    const secretKey = this.configService.get<string>('SECRET_TOKEN');
    return jwt.sign(payload, secretKey);
  }
}