import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { MercadopagoService } from '../mercadopago/mercadopago.service';
import { PaypalService } from '../paypal/paypal.service';
import { paypalItemDto } from 'src/dto/paypal-item.dto';
import { mercadoItemDto } from 'src/dto/mercadopago-item.dto';
import { SongsService } from 'src/songs/songs.service';
import { UserService } from 'src/user/user.service';

@Controller('payment')
export class PaymentController {
  constructor(
    private readonly mercadopagoService: MercadopagoService,
    private readonly paypalService: PaypalService,
    private readonly songService: SongsService,
    private readonly userService: UserService,
  ) {}

  @Post('mercadopago')
  async createPayment(@Body() items: mercadoItemDto[], @Res() res) {
    try {
      const song = await this.songService.getById(items[0].id);
      const user = await this.userService.getById(items[0].user_id);
      const songsPurchased = user.songsPurchased;
      if (songsPurchased.includes(song._id)) {
        return res
          .status(HttpStatus.OK)
          .json({ message: 'El usuario ya adquirio esta cancion' });
      }
      const preference = await this.mercadopagoService.createPayment(items);
      if (!preference) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .send('No se pudo crear la preferencia de pago');
      }
      return res.status(HttpStatus.OK).json(preference.body.init_point);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ 'Error al procesar el pago': error });
    }
  }

  @Post('paypal/create')
  async createPaypalPayment(@Body() items: paypalItemDto, @Res() res) {
    try {
      const order = await this.paypalService.createOrder(items);

      if (!order) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .send('No se pudo crear la preferencia de pago');
      }

      return res.status(HttpStatus.OK).json(order.data.links[1]);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ 'Error al procesar el pago': error });
    }
  }

  @Get('paypal/capture')
  async capturepaypalPayment(@Req() req, @Res() res) {
    try {
      const { token } = req.query;

      const response = await this.paypalService.captureOrder(token);

      if (!response) {
        return res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .send('Ocurrio un error completando el pago');
      }

      return res.status(HttpStatus.OK).send('Payment copmlete');
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send('Ocurrio un error completando el pago');
    }
  }
}
