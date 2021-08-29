import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController], // URL을 가져오고 함수를 실행하는 역할 ( express의 router 기능)
  providers: [MoviesService],
})
export class AppModule {}
