import { Body, Controller, Post } from "@nestjs/common";
import { ImcService } from "../service/imc.service";
import { CalcularImcDto } from "../dto/ims.dto";

@Controller("imc")
export class ImcController {
  constructor(private readonly imcService: ImcService) {}

  @Post("/calcular")
  calcular(@Body() dto: CalcularImcDto) {
    return this.imcService.calcular(dto);
  }
}
