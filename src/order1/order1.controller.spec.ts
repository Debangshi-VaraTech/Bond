import { Test, TestingModule } from '@nestjs/testing';
import { Order1Controller } from './order1.controller';

describe('Order1Controller', () => {
  let controller: Order1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Order1Controller],
    }).compile();

    controller = module.get<Order1Controller>(Order1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
