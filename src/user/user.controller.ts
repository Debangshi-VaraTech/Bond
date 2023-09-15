// src/user/user.controller.ts

import { Controller, Post, Body, Param, Query } from '@nestjs/common';
import { CreateWalletDto } from './create-wallet.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-wallet')
  async createWallet(@Query('dematId') dematId: string, @Body() body:any) {
    const result = await this.userService.createWallet(dematId, body);
    return { success: true, data: result };
  }
}
