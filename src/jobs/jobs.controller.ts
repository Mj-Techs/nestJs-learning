import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Job } from './interface/job.interface';
import { JobsService } from './jobs.service';
import { jobDTO } from './dto/job.dto';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobService: JobsService) {}
  @Get()
  findAll(): Promise<Job[]> {
    return this.jobService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Job> {
    return await this.jobService.findOne(id);
  }
  @Post()
  async create(@Body() body: jobDTO): Promise<Job> {
    return await this.jobService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: jobDTO): Promise<Job> {
    return await this.jobService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Job> {
    return await this.jobService.delete(id);
  }
}
