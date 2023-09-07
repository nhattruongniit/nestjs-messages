// using generate dto class
import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  content: string;
}
