import { Injectable } from "@nestjs/common";
import { CalcularImcDto } from "../dto/ims.dto";

@Injectable()
export class ImcService {
  calcular(dto: CalcularImcDto) {
    const { peso, talla, edad } = dto;

    const imc = peso / (talla * talla);

    const grupo = this.obtenerGrupoEdad(edad);

    const clasificacion = this.clasificar(imc, grupo);

    return {
      imc: Number(imc.toFixed(2)),
      grupo,
      clasificacion,
    };
  }

  private obtenerGrupoEdad(edad: number): string {
    if (edad < 2) return "bebe";
    if (edad < 5) return "nino_pequeno";
    if (edad < 20) return "menor";
    if (edad < 60) return "adulto";
    return "adulto_mayor";
  }

  private clasificar(imc: number, grupo: string): string {
    if (grupo === "adulto" || grupo === "adulto_mayor") {
      if (imc < 18.5) return "Bajo peso";
      if (imc < 25) return "Normal";
      if (imc < 30) return "Sobrepeso";
      if (imc < 35) return "Obesidad I";
      if (imc < 40) return "Obesidad II";
      return "Obesidad III";
    }

    // Para menores simplificamos (MVP)
    return "Clasificación por percentiles requerida";
  }
}
