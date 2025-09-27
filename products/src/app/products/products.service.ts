import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productsRepo: Repository<Product>,
    ) { }

    create(product: Partial<Product>) {
        const newProduct = this.productsRepo.create(product);
        return this.productsRepo.save(newProduct);
    }

    findAll() {
        return this.productsRepo.find();
    }

    findOne(id: number) {
        return this.productsRepo.findOneBy({ id });
    }

    update(id: number, data: Partial<Product>) {
        return this.productsRepo.update(id, data);
    }

    remove(id: number) {
        return this.productsRepo.delete(id);
    }
}
