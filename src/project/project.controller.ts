import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  // POST /projects
  @Post()
  create(@Body() dto: CreateProjectDto) {
    return this.projectService.create(dto);
  }

  // GET /projects
  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  // GET /projects/user/:userId
  @Get('/user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.projectService.findByUser(userId);
  }

  // GET /projects/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(id);
  }

  // PATCH /projects/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProjectDto) {
    return this.projectService.update(id, dto);
  }

  // DELETE /projects/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(id);
  }

  // POST /projects/:id/members/:userId
  @Post(':id/members/:userId')
  addMember(@Param('id') id: string, @Param('userId') userId: string) {
    return this.projectService.addMember(id, userId);
  }

  // DELETE /projects/:id/members/:userId
  @Delete(':id/members/:userId')
  removeMember(@Param('id') id: string, @Param('userId') userId: string) {
    return this.projectService.removeMember(id, userId);
  }
}
