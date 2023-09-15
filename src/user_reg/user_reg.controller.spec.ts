import { Test, TestingModule } from '@nestjs/testing';
import { UserRegController } from './user_reg.controller';

describe('UserRegController', () => {
  let controller: UserRegController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRegController],
    }).compile();

    controller = module.get<UserRegController>(UserRegController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
