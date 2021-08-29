import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //유효성 검사용 파이프(미들웨어)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 아무 decorator도 없는 어떠한 property의 object를 거릅니다.
      forbidNonWhitelisted: true, // Request 자체를 막는 방법
      transform: true, // 유저들이 보낸거를 우리가 원하는 실제 타입으로 변경해줌
    }),
  );
  await app.listen(3000);
}
bootstrap();
