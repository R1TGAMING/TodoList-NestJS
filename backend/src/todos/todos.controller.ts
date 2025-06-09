import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpException,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    try {
      const res = await this.todosService.create(createTodoDto);

      return {
        status: 201,
        message: 'success',
        data: res,
      };
    } catch (e) {
      console.error(e);

      if (e instanceof HttpException) {
        throw e;
      }

      if (e instanceof Error) {
        throw e;
      }
    }
  }

  @Get()
  async findAll() {
    try {
      const res = await this.todosService.findAll();

      return {
        status: 200,
        message: 'success',
        data: res,
      };
    } catch (e) {
      console.error(e);

      if (e instanceof HttpException) {
        throw e;
      }

      if (e instanceof Error) {
        throw e;
      }
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      const res = await this.todosService.findOne(id);
      return {
        status: 200,
        message: 'success',
        data: res,
      };
    } catch (e) {
      console.error(e);

      if (e instanceof HttpException) {
        throw e;
      }

      if (e instanceof Error) {
        throw e;
      }
    }
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    try {
      const res = await this.todosService.update(id, updateTodoDto);
      return {
        status: 200,
        message: 'success',
        data: res,
      };
    } catch (e) {
      console.error(e);

      if (e instanceof HttpException) {
        throw e;
      }

      if (e instanceof Error) {
        throw e;
      }
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      const res = await this.todosService.remove(id);
      return {
        status: 200,
        message: 'success',
        data: res,
      };
    } catch (e) {
      console.error(e);

      if (e instanceof HttpException) {
        throw e;
      }

      if (e instanceof Error) {
        throw e;
      }
    }
  }
}
