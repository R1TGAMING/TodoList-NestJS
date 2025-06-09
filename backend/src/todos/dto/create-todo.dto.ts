import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
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
