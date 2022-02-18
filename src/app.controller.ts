import { Controller, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { GenerateJWTTokenDto } from './dtos/requests/GenerateJWTToken.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('jwt-token')
  generateJWTToken(@Body() body: GenerateJWTTokenDto): string {
    return this.appService.generateJWTToken(body);
  }
}
