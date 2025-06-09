import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsBoolean, IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsString()
  @IsOptional()
  task: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  @IsOptional()
  @IsNotEmpty()
  completed: boolean;
}
