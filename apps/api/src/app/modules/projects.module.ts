import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjectService } from "../services/project.service";
import { ProjectController } from "../controllers/project.controller";
import { Project } from "../models/project.model";


@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  providers: [ProjectService],
  controllers: [ProjectController]

})
export class ProjectsModule {
}
