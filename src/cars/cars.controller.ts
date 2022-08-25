import { Controller, Get } from '@nestjs/common'

// nest g co cars
// Actualiza su modulo correspondiente
@Controller('cars')
export class CarsController {
  @Get()
  getAllCars() {
    return ['Toyota', 'Mercedes', 'Honda']
  }
}
