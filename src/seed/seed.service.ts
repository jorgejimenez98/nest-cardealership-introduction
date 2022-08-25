import { Injectable } from '@nestjs/common'
import { CarsService } from '../cars/cars.service'
import { BrandsService } from '../brands/brands.service'
import { CARS_SEED } from './data/cars.seed'
import { BRAND_SEED } from './data/brands.seed'

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDatabase() {
    this.carsService.fillCarsWithSeedData(CARS_SEED)
    this.brandsService.fillBrandsWithSeedData(BRAND_SEED)
    return { message: 'DB Populated successfully' }
  }
}
