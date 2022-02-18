import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { GenerateJWTTokenDto } from './dtos/requests/GenerateJWTToken.dto';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    return 'Hello World!';
  }

  generateJWTToken(payload: GenerateJWTTokenDto): string {
    const secretKey = this.configService.get('SECRET_KEY');
    const keyId = this.configService.get('KEY_ID');

    return jwt.sign(payload, secretKey, {
      header: { kid: keyId },
      algorithm: 'HS256',
    });
  }
}
