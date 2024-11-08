import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { Project, ProjectDocument } from "./model/project.schema";

@Controller('api/projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() project: ProjectDocument): Promise<Project> {
    return this.projectService.create(project);
  }

  @Get()
  findAll(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Project> {
    return this.projectService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() task: ProjectDocument): Promise<Project> {
    return this.projectService.update(id, task);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(id);
  }
}