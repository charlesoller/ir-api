import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Task, TaskDocument } from "./model/task.schema";
import { Model, Types } from "mongoose";

@Injectable()
export class TaskService {
  @InjectModel(Task.name)
  private readonly taskModel: Model<TaskDocument>;

  async create(task: Task) {
		task._id = new Types.ObjectId();
		const newTask = new this.taskModel(task);
		await newTask.save();
		return newTask;
	}

	async findAll() {
		return await this.taskModel.find();
	}

	async findOne(id: string) {
		return await this.taskModel.findById(new Types.ObjectId(id));
	}

	async update(id: string, task: Task) {
		return await this.taskModel.findByIdAndUpdate(new Types.ObjectId(id), task, { new: true });
	}

	async toggleComplete(id: string) {
		let task = await this.findOne(id);
		task.complete = !task.complete;
		return this.update(id, task);
	}

	async remove(id: string) {
		return await this.taskModel.findByIdAndDelete(new Types.ObjectId(id));
	}
}