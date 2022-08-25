import { Module } from '@nestjs/common'
import { CarsController } from './cars.controller'
// nest g mo cars
@Module({
  controllers: [CarsController],
})
export class CarsModule {}
