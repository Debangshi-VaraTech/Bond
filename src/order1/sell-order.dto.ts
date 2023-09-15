// src/order/sell-order.dto.ts

import { IsString, IsEnum, IsNumber } from 'class-validator';
import { StockExchange } from './order1.enum';


export class SellOrderDto {
  @IsString()
  dematId: string;

  bondDetails: {};

  @IsEnum(StockExchange)
  stockExchange: StockExchange;

  @IsNumber()
  quantity: number;
}
