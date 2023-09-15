// src/user/user.module.ts

import { Module } from '@nestjs/common';
import { UserRegService } from './user_reg.service';
import { UserRegController } from './user_reg.controller';

@Module({
  controllers: [UserRegController],
  providers: [UserRegService],
})
export class UserRegModule {}
