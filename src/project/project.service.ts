import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Project, ProjectDocument } from "./model/project.schema";

@Injectable()
export class ProjectService {
  @InjectModel(Project.name)
  private readonly projectModel: Model<ProjectDocument>;

  async create(project: Project) {
		project._id = new Types.ObjectId();
		const newProject = new this.projectModel(project);
		await newProject.save();
		return newProject;
	}

	async findAll() {
		return await this.projectModel.find();
	}

	async findOne(id: string) {
		return await this.projectModel.findById(new Types.ObjectId(id));
	}

	async update(id: string, project: Project) {
		return await this.projectModel.findByIdAndUpdate(new Types.ObjectId(id), project, { new: true });
	}

	async remove(id: string) {
		return await this.projectModel.findByIdAndDelete(new Types.ObjectId(id));
	}
}