import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController], // URL을 가져오고 함수를 실행하는 역할 ( express의 router 기능)
  providers: [],
})
export class AppModule {}
