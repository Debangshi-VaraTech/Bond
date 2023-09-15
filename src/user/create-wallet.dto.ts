// src/user/create-wallet.dto.ts

import { IsString } from 'class-validator';

export class CreateWalletDto {
  @IsString()
  userId: string;

  dematDetails: {};
}
