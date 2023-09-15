// src/quantity/quantity.module.ts

import { Module } from '@nestjs/common';
import { QuantityController } from './quantity.controller';
import { QuantityService } from './quantity.service';

@Module({
  controllers: [QuantityController],
  providers: [QuantityService],
})
export class QuantityModule {}
