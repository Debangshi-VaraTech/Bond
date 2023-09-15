import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletModule } from './wallet/wallet.module'; // Import the module
import { TokenController } from './token/token.controller';
import { TransactionModule } from './transaction/transaction.module';
import { TokenModule } from './token/token.module';
import { BondModule } from './bond/bond.module';
import { UserModule } from './user/user.module';
import { UserRegModule } from './user_reg/user_reg.module';
import { OrderModule } from './order/order.module';
import { Order1Module } from './order1/order1.module';
import { TransferOrderModule } from './transfer_order/transfer_order.module';
import { QuantityModule } from './quantity/quantity.module';

@Module({
  imports: [WalletModule,TokenModule,TransactionModule, BondModule, UserModule, UserRegModule, OrderModule, Order1Module, TransferOrderModule, QuantityModule], // Add WalletModule to imports
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
