import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/product.entity';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'jayesh@2512',
      database: 'procuraDB',
      entities: [Product],
      synchronize: true, // only for dev
    }),
    ProductsModule,
  ],
})
export class AppModule { }
