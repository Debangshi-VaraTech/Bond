// src/order/buy-order.dto.ts

import { IsString, IsEnum, IsNumber } from 'class-validator';
import { StockExchange } from './order.enum';

export class BuyOrderDto {
  @IsString()
  dematId: string;

  bondDetails: {};

  @IsEnum(StockExchange)
  stockExchange: StockExchange;

  @IsNumber()
  quantity: number;
}
