import { Injectable, NotFoundException } from '@nestjs/common'
//nest g s cars --no-spec
@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Lada',
      model: 'Corolla',
    },
    {
      id: 3,
      brand: 'Mercedes',
      model: 'Corolla',
    },
  ]

  findAll() {
    return this.cars
  }

  getById(id: number) {
    const car = this.cars.find((c) => c.id === id)
    // Show Responses on Exception
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`)
    return car
  }
}
