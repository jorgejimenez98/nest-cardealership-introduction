import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ParseUUIDPipe
} from '@nestjs/common'
import { CarsService } from './cars.service'

// nest g co cars
// Actualiza su modulo correspondiente
@Controller('cars')
export class CarsController {
  constructor(private readonly carsSerice: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsSerice.findAll()
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsSerice.getById(id)
  }

  @Post()
  createCar(@Body() payload: any) {
    return payload
  }

  @Patch(':id')
  updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() payload: any) {
    return payload
  }

  @Delete()
  deleteCar(@Param('id') id: string) {
    return id
  }
}
