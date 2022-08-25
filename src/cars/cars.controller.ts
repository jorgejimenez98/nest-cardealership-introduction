import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ParseUUIDPipe,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { CarsService } from './cars.service'
import { CreateCarDto } from './dto/create-car.dto'
import { UpdateCarDto } from './dto/update-car.dto'

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
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsSerice.create(createCarDto)
  }

  @Patch(':id')
  updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsSerice.update(id, updateCarDto)
  }

  @Delete()
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return id
  }
}
