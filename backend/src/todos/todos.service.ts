import { HttpException, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaClientKnownRequestError } from 'generated/prisma/runtime/library';
import { validateOrReject } from 'class-validator';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class TodosService {
  // Set constructor to inject PrismaService
  constructor(private readonly prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto) {
    try {
      // Validate DTO
      await validateOrReject(createTodoDto);

      // Create a new todo
      const todo = await this.prisma.todo.create({
        data: {
          task: createTodoDto.task,
          description: createTodoDto.description,
          completed: createTodoDto.completed,
        },
      });

      // Return a todo
      return todo;
    } catch (e) {
      console.error(e);

      // Catch prisma error
      if (e instanceof PrismaClientKnownRequestError) {
        console.error(e);
      }

      // Catch internal server error
      if (e instanceof Error) {
        throw new HttpException('Internal Server Error', 500);
      }
    }
  }

  async findAll() {
    try {
      // Get all todos
      const todos = await this.prisma.todo.findMany();

      // Validate if todo not exists
      if (todos.length === 0) {
        throw new HttpException('No todos found', 404);
      }

      // Return a todo
      return todos;
    } catch (e) {
      console.error(e);
      if (e instanceof PrismaClientKnownRequestError) {
        console.error(e);
        throw e;
      }
      if (e instanceof HttpException) {
        console.error(e);
        throw e;
      }
      if (e instanceof Error) {
        console.error(e);
        throw e;
      }
    }
  }

  async findOne(id: number) {
    try {
      // Get a todo by id
      const todo = await this.prisma.todo.findUnique({ where: { id: id } });

      // Validate if todo not exists
      if (!todo) {
        throw new HttpException('Todo not found', 404);
      }

      // Return a todo
      return todo;
    } catch (e) {
      console.error(e);
      if (e instanceof PrismaClientKnownRequestError) {
        console.error(e);
        throw e;
      }
      if (e instanceof HttpException) {
        console.error(e);
        throw e;
      }
      if (e instanceof Error) {
        console.error(e);
        throw e;
      }
    }
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    try {
      // Validate DTO
      validateOrReject(updateTodoDto);

      // Update a todo by id
      const todo = await this.prisma.todo.update({
        where: {
          id: id,
        },
        data: {
          task: updateTodoDto.task,
          description: updateTodoDto.description,
          completed: updateTodoDto.completed,
        },
      });

      // Validate if todo not exists
      if (!todo) {
        throw new HttpException('Todo not found', 404);
      }

      // Return a todo
      return todo;
    } catch (e) {
      console.error(e);
      if (e instanceof PrismaClientKnownRequestError && e.code === 'P2025') {
        console.error(e);
        throw new HttpException('Todo not found', 404);
      }
      if (e instanceof HttpException) {
        console.error(e);
        throw e;
      }
      if (e instanceof Error) {
        console.error(e);
        throw e;
      }
    }
  }

  async remove(id: number) {
    try {
      // Delete a todo by id
      const todo = await this.prisma.todo.delete({
        where: {
          id: id,
        },
      });

      // Return a todo
      return todo;
    } catch (e) {
      console.error(e);
      if (e instanceof PrismaClientKnownRequestError && e.code === 'P2025') {
        console.error(e);
        throw new HttpException('Todo not found', 404);
      }
      if (e instanceof HttpException) {
        console.error(e);
        throw e;
      }
      if (e instanceof Error) {
        console.error(e);
        throw e;
      }
    }
  }
}
