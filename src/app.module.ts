import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], // URL을 가져오고 함수를 실행하는 역할 ( express의 router 기능)
  providers: [AppService],
})
export class AppModule {}
