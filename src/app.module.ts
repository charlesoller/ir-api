import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';
import { ProjectModule } from './project/projects.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.3'),
    TaskModule,
    ProjectModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
