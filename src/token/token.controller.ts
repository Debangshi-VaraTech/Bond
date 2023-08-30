// token.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { TokenService } from './token.service';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Get('balance')
  getTokenBalance(@Query('bondId') bondId: string, @Query('userId') userId: string) {
    return this.tokenService.getTokenBalance(bondId, userId);
  }
}
