import { Controller, Get, Param } from '@nestjs/common'

// nest g co cars
// Actualiza su modulo correspondiente
@Controller('cars')
export class CarsController {
  private cars = ['Toyota', 'Mercedes', 'Honda']

  @Get()
  getAllCars() {
    return this.cars
  }

  @Get(':id')
  getCarById(@Param('id') id: number) {
    console.log({ id })
    return { car: this.cars[id] }
  }
}
