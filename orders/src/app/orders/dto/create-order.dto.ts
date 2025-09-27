import { IsArray, IsNotEmpty, IsNumber, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class CustomerDto {
    @IsNotEmpty()
    name!: string;

    @IsNotEmpty()
    phone!: string;
}

export class CreateOrderDto {
    @IsObject()
    @ValidateNested()
    @Type(() => CustomerDto)
    customer!: CustomerDto;

    @IsArray()
    @IsNumber({}, { each: true })
    products!: number[];
}
