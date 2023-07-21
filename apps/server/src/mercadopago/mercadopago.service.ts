import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Preference } from 'mercadopago';
import { mercadoItemDto } from 'src/dto/mercadopago-item.dto';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';

@Injectable()
export class MercadopagoService {
  private mercadopago: any;

  constructor() {
    this.mercadopago = require('mercadopago');
    this.mercadopago.configure({
      access_token: process.env.ACCESS_TOKEN,
    });
  }

  async createPayment(items: mercadoItemDto[]): Promise<Preference> {
    try {
      const user_id = items[0].user_id;
      const id = items[0].id;

      const preference = {
        items,
        back_urls: {
          success: `${process.env.SELF_DEPLOY}`,
          failure: `${process.env.SELF_DEPLOY}`,
          pending: `${process.env.SELF_DEPLOY}`,
        },
        auto_return: 'approved',
        notification_url: `https://0443-181-169-126-137.ngrok.io/user/addsong?userid=${user_id}&songid=${id}`,
      };

      const createdPref = await this.mercadopago.preferences.create(preference);

      if (!createdPref) {
        throw new Error('Ocurrio un error creando el pago en mercadopago');
      }

      return createdPref;
    } catch (error) {
      throw error;
    }
  }
}
