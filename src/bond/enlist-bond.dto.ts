// src/bond/enlist-bond.dto.ts

import { IsString, IsEnum } from 'class-validator';
import { StockExchange } from './bond.enum';

export class EnlistBondDto {
  @IsString()
  bondSymbol: string;

  bondDetails: {};

  @IsEnum(StockExchange)
  stockExchange: StockExchange;
}
