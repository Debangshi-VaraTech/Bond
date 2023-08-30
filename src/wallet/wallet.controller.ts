import { Controller, Post, Body } from '@nestjs/common';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('create')
  async createWallet(@Body() request: { userId: string }) {
    const response = await this.walletService.createWallet(request.userId);
    return response;
  }
}
