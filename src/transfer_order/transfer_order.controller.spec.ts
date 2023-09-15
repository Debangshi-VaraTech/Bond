import { Test, TestingModule } from '@nestjs/testing';
import { TransferOrderController } from './transfer_order.controller';

describe('TransferOrderController', () => {
  let controller: TransferOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransferOrderController],
    }).compile();

    controller = module.get<TransferOrderController>(TransferOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
