import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument, Types } from "mongoose";

export type TaskDocument = HydratedDocument<Task>;

@Schema({ timestamps: true, autoIndex: true, collection: 'tasks' })
export class Task extends Document {
  @Prop()
	_id: Types.ObjectId;

  @Prop()
  title: string;

  @Prop()
  message: string;

  @Prop({ default: false })
  complete: boolean;

  @Prop({ type: Types.ObjectId, ref: 'Project' })
  projectId: Types.ObjectId;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
