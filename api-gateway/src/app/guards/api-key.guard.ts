import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request: Request = context.switchToHttp().getRequest();
        const apiKey = request.headers['x-api-key']; // clients must send this header

        if (!apiKey || apiKey !== process.env.API_KEY) {
            throw new UnauthorizedException('Invalid API key');
        }
        return true;
    }
}
