// src/order/order.controller.ts

import { Controller, Post, Body, Param, Query } from '@nestjs/common';
import { BuyOrderDto } from './buy-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('buy')
  async buyOrder(@Query('bondSymbol') bondSymbol: string, @Body() buyOrderDto: BuyOrderDto) {
    const result = await this.orderService.buyOrder(bondSymbol, buyOrderDto);
    return { success: true, data: result };
  }
}
