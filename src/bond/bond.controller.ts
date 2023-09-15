// src/bond/bond.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { EnlistBondDto } from './enlist-bond.dto';
import { BondService } from './bond.service';

@Controller('enlist-bond')
export class BondController {
  constructor(private readonly bondService: BondService) {}

  @Post()
  async enlistBond(@Body() enlistBondDto: EnlistBondDto) {
    const result = await this.bondService.enlistBond(enlistBondDto);
    return { success: true, data: result };
  }
}
