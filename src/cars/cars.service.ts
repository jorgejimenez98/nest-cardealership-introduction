import { Injectable, NotFoundException } from '@nestjs/common'
import { Car } from './interfaces/car.interface'
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto'
//nest g s cars --no-spec
@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Lada',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Mercedes',
      model: 'Corolla',
    },
  ]

  findAll() {
    return this.cars
  }

  getById(id: string): Car {
    const car = this.cars.find((c) => c.id === id)
    // Show Responses on Exception
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`)
    return car
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = { id: uuid(), ...createCarDto }
    this.cars.push(car)
    return car
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB: Car = this.getById(id)
    this.cars = this.cars.map((car: Car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id }
        return carDB
      }
      return car
    })
    return carDB
  }
}
