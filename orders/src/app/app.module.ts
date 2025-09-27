import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/order.entity';
import { Product } from './orders/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'jayesh@2512',
      database: 'procuraDB',
      entities: [Order, Product],
      synchronize: true,
    }),
    OrdersModule,
  ],
})
export class AppModule { }
