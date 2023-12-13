import { IsString, MinLength, IsOptional } from 'class-validator';

export class CreatePortfolioDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsString()
  imageUrl: string;

  @IsString()
  @IsOptional()
  urlProject: string;
}
