import {
  Body,
  Controller,
  HttpStatus,
  Inject,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { MercadopagoService } from './mercadopago.service';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { PaymentStatus } from 'src/dto/update-payment-status';
import { paymentType } from 'src/enums/enums';

@Controller('status')
export class MercadopagoController {
  constructor(
    @InjectModel(User.name)
    private mercadopagoService: MercadopagoService,
    private userService: UserService, // private playlistModel: Model<User>
  ) {}
  @Post('/mercadopago/:id')
  async configureMp(
    @Param('id') id: string,
    @Res() res,
    @Body() updateUserDto: PaymentStatus,
  ) {
    try {
      const user = await this.userService.getById(id);
      if (!user) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'User not found' });
      }
      const userUpdated = await this.userService.updatePaymentById(
        id,
        paymentType.MP,
      );

      return res.status(HttpStatus.OK).json(userUpdated);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }
  }

  @Post('/paypal/:id')
  async configurePaypal(
    @Param('id') id: string,
    @Res() res,
    @Body() updateUserDto: PaymentStatus,
  ) {
    try {
      const user = await this.userService.getById(id);
      if (!user) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'User not found' });
      }
      const userUpdated = await this.userService.updatePaymentById(
        id,
        paymentType.PAYPAL,
      );

      return res.status(HttpStatus.OK).json(userUpdated);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }
  }
}
