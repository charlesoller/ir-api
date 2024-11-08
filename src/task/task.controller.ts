import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { TaskService } from "./task.service";
import { Task, TaskDocument } from "./model/task.schema";

@Controller('api/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() task: TaskDocument): Promise<Task> {
    return this.taskService.create(task);
  }

  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Get('id')
  findOne(@Param('id') id: string): Promise<Task> {
    return this.taskService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() task: TaskDocument): Promise<Task> {
    return this.taskService.update(id, task);
  }

  @Patch(':id/toggle')
  toggleComplete(@Param('id') id: string): Promise<Task> {
    return this.taskService.toggleComplete(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}