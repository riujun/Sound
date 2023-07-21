import { IsArray, IsNumber, IsString } from 'class-validator';

export class mercadoItemDto {
  @IsString()
  id: string;

  @IsString()
  user_id: string;

  @IsNumber()
  unit_price: number;

  @IsNumber()
  quantity: number;
}
