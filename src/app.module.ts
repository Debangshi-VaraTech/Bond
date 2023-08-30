import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletModule } from './wallet/wallet.module'; // Import the module

@Module({
  imports: [WalletModule], // Add WalletModule to imports
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
