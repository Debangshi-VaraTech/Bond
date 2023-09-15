// src/order/order.module.ts

import { Module } from '@nestjs/common';
import { Order1Controller } from './order1.controller';
import { Order1Service } from './order1.service';

@Module({
  controllers: [Order1Controller],
  providers: [Order1Service],
})
export class Order1Module {}
