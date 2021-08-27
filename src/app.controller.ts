import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // express의 GET임
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello') // 13줄과 14줄 사이는 붙어
  sayHello(): string {
    return 'Hello everyone';
  }
}
