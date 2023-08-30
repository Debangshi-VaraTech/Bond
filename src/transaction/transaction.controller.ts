// transaction.controller.ts
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('write')
  writeTransaction(@Body() writeTransactionDto: { userId: string, bondId: string, amount: number }) {
    return this.transactionService.writeTransaction(writeTransactionDto);
  }

  @Get('transactions')
  getTransactionsByUserId(@Query('userId') userId: string) {
    return this.transactionService.getTransactionsByUserId(userId);
  }

  


}
