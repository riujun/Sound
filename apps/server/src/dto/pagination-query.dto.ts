import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  limit: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  offset: number;
}
