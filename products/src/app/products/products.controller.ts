import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
// import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';


@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return this.productsService.create(createProductDto);
    }

    @Get()
    findAll() {
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.productsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() createProductDto: CreateProductDto) {
        return this.productsService.update(id, createProductDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.productsService.remove(id);
    }
}
