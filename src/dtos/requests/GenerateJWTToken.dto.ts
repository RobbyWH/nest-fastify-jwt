import { IsString } from 'class-validator';

export class GenerateJWTTokenDto {
  @IsString()
  email: string;

  @IsString()
  name: string;

  @IsString()
  scope: string;

  @IsString()
  external_id: string;
}
