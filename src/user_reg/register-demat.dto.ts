// src/user/register-demat.dto.ts

import { IsString } from 'class-validator';

export class RegisterDematDto {
  @IsString()
  userId: string;

  dematDetails: {};
}
