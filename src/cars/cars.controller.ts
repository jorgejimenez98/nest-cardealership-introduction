import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
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
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsSerice.getById(id)
  }

  @Post()
  createCar(@Body() payload: any) {
    return payload
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    return payload
  }

  @Delete()
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return id
  }
}
