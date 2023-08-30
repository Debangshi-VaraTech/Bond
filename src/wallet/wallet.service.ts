import { Injectable } from '@nestjs/common';

@Injectable()
export class WalletService {
  createWallet(userId: string) {
    // Generate encoded wallet logic here

    const createdAt = new Date().toISOString();
    const encodedWallet = 'Generated_Encoded_Wallet';
    const status = 'Created';

    return {
      userId,
      encodedWallet,
      createdAt,
      status,
    };
  }
}
