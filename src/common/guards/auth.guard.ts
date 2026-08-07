import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }

    async canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest();
        const authHeader: string | undefined = req.headers?.authorization;
        if (!authHeader) {
            throw new UnauthorizedException('Token is missing');
        }

        const parts = authHeader.split(' ');
        if (parts.length !== 2) {
            throw new UnauthorizedException('Token is malformed');
        }

        const [, token] = parts; // Bearer <token>
        try {
            const payload = await this.jwtService.verifyAsync(token);
            // attach user info to request if needed
            req.user = payload;
            return true;
        } catch (err) {
            throw new UnauthorizedException('Invalid token');
        }
    }
}