// orders.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order) private orderRepo: Repository<Order>,
        @InjectRepository(Product) private productRepo: Repository<Product>
    ) { }

    async createOrder(customer: any, productIds: number[]) {
        // Fetch Product entities
        const products = await this.productRepo.findByIds(productIds);

        const totalAmount = products.reduce((sum, p) => sum + Number(p.rate), 0);

        const order = this.orderRepo.create({ customer, products, totalAmount });
        return this.orderRepo.save(order);
    }

    findAll() {
        return this.orderRepo.find({ relations: ['products'] });
    }

    findOne(id: number) {
        return this.orderRepo.findOne({ where: { id }, relations: ['products'] });
    }
}
