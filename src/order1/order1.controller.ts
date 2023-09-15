// src/order/order.controller.ts

import { Controller, Post, Body, Param, Query } from '@nestjs/common';
import { SellOrderDto } from './sell-order.dto';
import { Order1Service } from './order1.service';

@Controller('order')
export class Order1Controller {
  constructor(private readonly orderService: Order1Service) {}

  @Post('sell')
  async sellOrder(@Query('bondSymbol') bondSymbol: string, @Body() sellOrderDto: SellOrderDto) {
    const result = await this.orderService.sellOrder(bondSymbol, sellOrderDto);
    return { success: true, data: result };
  }
}
