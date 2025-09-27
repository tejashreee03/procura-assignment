import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('json')
    customer!: {
        name: string;
        phone: string;
    };

    @ManyToMany(() => Product)
    @JoinTable()
    products!: Product[];

    @Column('decimal', { precision: 10, scale: 2 })
    totalAmount!: number;
}
