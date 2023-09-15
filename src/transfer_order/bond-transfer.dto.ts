// src/order/bond-transfer.dto.ts

import { IsString, IsEnum, IsNumber } from 'class-validator';
import { StockExchange } from './order.enum';

export class BondTransferDto {
  @IsString()
  fromDematId: string;

  @IsString()
  toDematId: string;

  @IsEnum(StockExchange)
  stockExchange: StockExchange;

  @IsNumber()
  quantity: number;
}
