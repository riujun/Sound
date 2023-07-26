import { Injectable } from '@nestjs/common';
import { Preference } from 'mercadopago';
import { mercadoItemDto } from 'src/dto/mercadopago-item.dto';

@Injectable()
export class MercadopagoService {
  private mercadopago: any;

  constructor() {
    this.mercadopago = require('mercadopago');
    this.mercadopago.configure({
      access_token: process.env.ACCESS_TOKEN,
    });
  }

  async createPayment(order: mercadoItemDto): Promise<Preference> {
    try {
      console.log(order);

      const preference = {
        items: [order],
        back_urls: {
          success: `${process.env.SELF_DEPLOY}`,
          failure: `${process.env.SELF_DEPLOY}`,
          pending: `${process.env.SELF_DEPLOY}`,
        },
        auto_return: 'approved',
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
