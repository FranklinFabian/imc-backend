import { IsNumber, IsPositive, IsIn, Min, Max } from "class-validator";

export class CalcularImcDto {
  @IsNumber()
  @IsPositive()
  peso: number; // kg

  @IsNumber()
  @IsPositive()
  talla: number; // metros

  @IsNumber()
  @Min(0)
  @Max(200)
  edad: number;

  @IsIn(["M", "F"])
  sexo: "M" | "F";
}
