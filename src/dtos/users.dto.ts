import { MinLength, MaxLength, ArrayNotEmpty } from 'class-validator';

export class CreateUserDto {
  @MinLength(10)
  @MaxLength(20)
  public name: string;

  // @ArrayNotEmpty()
  public hobbies: string[];
}
