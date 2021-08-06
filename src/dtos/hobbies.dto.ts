import { MinLength, MaxLength, IsNumber } from 'class-validator';

export class CreateHobbiesDto {
  @MinLength(10)
  @MaxLength(50)
  public name: string;

  @MinLength(4)
  @MaxLength(20)
  public passionLevel: string;

  @IsNumber()
  public year: number;
}
