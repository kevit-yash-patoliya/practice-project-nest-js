import { IsArray, IsMongoId, IsOptional, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  projectName!: string;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  sharedIds?: string[];

  @IsMongoId()
  createdBy!: string;
}
