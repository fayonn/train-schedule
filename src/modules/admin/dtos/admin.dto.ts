import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export class AdminDto {
  @Expose()
  @IsString()
  id: string

  @Expose()
  @IsString()
  email: string

  @IsString()
  password: string
}