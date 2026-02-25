import { Module } from "@nestjs/common";
import { ImcController } from "./controller/imc.controller";
import { ImcService } from "./service/imc.service";

@Module({
  controllers: [ImcController],
  providers: [ImcService],
})
export class ImcModule {}
