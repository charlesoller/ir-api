import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument, Types } from "mongoose";

export type ProjectDocument = HydratedDocument<Project>;

@Schema({ timestamps: true, autoIndex: true, collection: 'projects' })
export class Project extends Document {
  @Prop()
	_id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Task' }] })
  tasks: Types.Array<Types.ObjectId>;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
