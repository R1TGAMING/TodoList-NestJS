import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [TodosModule, CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
