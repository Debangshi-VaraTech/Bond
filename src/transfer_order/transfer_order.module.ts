// src/order/order.module.ts

import { Module } from '@nestjs/common';
import { TransferOrderController } from './transfer_order.controller';
import { TransferOrderService } from './transfer_order.service';

@Module({
  controllers: [TransferOrderController],
  providers: [TransferOrderService],
})
export class TransferOrderModule {}
