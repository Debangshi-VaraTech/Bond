// src/quantity/quantity.controller.ts

import { Controller, Get, Param, Query } from '@nestjs/common';
import {  QuantityService } from './quantity.service';

@Controller('get-quantity')
export class QuantityController {
  constructor(private readonly quantityService: QuantityService) {}

  @Get()
  async getQuantity(
    @Query('dematId') dematId: string,
    @Query('bondSymbol') bondSymbol: string,
  ) {
    const result = await this.quantityService.getQuantity(dematId, bondSymbol);
    return result;
  }
}
