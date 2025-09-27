import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { Repository } from 'typeorm';
import { Order } from './orders.entity';
import { Product } from './product.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('OrdersService', () => {
    let service: OrdersService;
    let orderRepo: Repository<Order>;
    let productRepo: Repository<Product>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                OrdersService,
                {
                    provide: getRepositoryToken(Order),
                    useValue: { create: jest.fn(), save: jest.fn(), find: jest.fn(), findOne: jest.fn() },
                },
                {
                    provide: getRepositoryToken(Product),
                    useValue: { findBy: jest.fn().mockResolvedValue([]) },
                },
            ],
        }).compile();

        service = module.get<OrdersService>(OrdersService);
        orderRepo = module.get(getRepositoryToken(Order));
        productRepo = module.get(getRepositoryToken(Product));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should return all orders', async () => {
        jest.spyOn(orderRepo, 'find').mockResolvedValue([]);
        const orders = await service.findAll();
        expect(orders).toEqual([]);
    });
});
