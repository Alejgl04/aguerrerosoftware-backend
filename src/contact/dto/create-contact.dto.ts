import { IsArray, IsEmail, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsArray()
  services: string[];

  @IsString()
  message: string;
}
