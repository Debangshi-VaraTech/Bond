// src/user/user.controller.ts

import { Controller, Post, Body, Param, Query } from '@nestjs/common';
import { RegisterDematDto } from './register-demat.dto';
import { UserRegService } from './user_reg.service';

@Controller('user')
export class UserRegController {
  constructor(private readonly userService: UserRegService) {}

  @Post('register-demat')
  async registerDemat(@Query('dematId') dematId: string, @Body() body: any) {
    console.log(body);
    
    const result = await this.userService.registerDemat(dematId, body);
    return { success: true, data: result };
  }
}
