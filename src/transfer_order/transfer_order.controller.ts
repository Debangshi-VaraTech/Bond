// src/order/order.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { BondTransferDto } from './bond-transfer.dto';
import { TransferOrderService } from './transfer_order.service';

@Controller('order')
export class TransferOrderController {
  constructor(private readonly orderService: TransferOrderService) {}

  @Post('bond-transfer')
  async bondTransfer(@Body() bondTransferDto: BondTransferDto) {
    const result = await this.orderService.bondTransfer(bondTransferDto);
    return { success: true, data: result };
  }
}
