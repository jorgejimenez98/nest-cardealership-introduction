import { Module } from '@nestjs/common'
import { CarsController } from './cars.controller'
import { CarsService } from './cars.service'
// nest g mo cars
@Module({
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService]
})
export class CarsModule {}
