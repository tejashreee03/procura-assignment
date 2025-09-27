import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import axios from 'axios';


@Controller()
export class GatewayController {
    private productsServiceUrl = 'http://localhost:3001/api/products'; // products service
    private ordersServiceUrl = 'http://localhost:3002/api/orders'; // orders service

    // ----------------- PRODUCTS -----------------
    @Get('products')
    async getProducts() {
        const res = await axios.get(this.productsServiceUrl);
        return res.data;
    }

    @Get('products/:id')
    async getProduct(@Param('id') id: number) {
        const res = await axios.get(`${this.productsServiceUrl}/${id}`);
        return res.data;
    }

    @Post('products')
    async createProduct(@Body() body: any) {
        const res = await axios.post(this.productsServiceUrl, body);
        return res.data;
    }

    // ----------------- ORDERS -----------------
    @Get('orders')
    async getOrders() {
        const res = await axios.get(this.ordersServiceUrl);
        return res.data;
    }

    @Get('orders/:id')
    async getOrder(@Param('id') id: number) {
        const res = await axios.get(`${this.ordersServiceUrl}/${id}`);
        return res.data;
    }

    @Post('orders')
    async createOrder(@Body() body: any) {
        const res = await axios.post(this.ordersServiceUrl, body);
        return res.data;
    }
}
