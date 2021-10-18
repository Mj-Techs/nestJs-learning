import { Injectable, Delete } from '@nestjs/common';
import { Job } from './interface/job.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { jobDTO } from './dto/job.dto';

@Injectable()
export class JobsService {
  constructor(@InjectModel('Job') private readonly jobModel: Model<Job>) {}
  async findAll(): Promise<Job[]> {
    return await this.jobModel.find();
  }

  async findOne(id: string): Promise<Job> {
    return await this.jobModel.findById({ _id: id });
  }

  async create(body: jobDTO): Promise<Job> {
    const newJob = new this.jobModel(body);
    return await newJob.save();
  }

  async update(id: string, body: jobDTO): Promise<Job> {
    return await this.jobModel.findByIdAndUpdate(id, body, { new: true });
  }

  async delete(id: string): Promise<Job> {
    return await this.jobModel.findByIdAndRemove(id);
  }
}
