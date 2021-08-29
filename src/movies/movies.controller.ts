import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'THis will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We ar searching for a movie made after : ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id : ${movieId}`;
  }

  @Post()
  create(@Body() movieDate) {
    console.log(movieDate);
    return movieDate;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movieid is ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateDate) {
    return {
      updateMovie: movieId,
      ...updateDate,
    };
  }
}
