import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateBrandDto } from './dto/create-brand.dto'
import { UpdateBrandDto } from './dto/update-brand.dto'
import { Brand } from './entities/brand.entity'
import { v4 as uuid } from 'uuid'

@Injectable()
export class BrandsService {
  private brands: Brand[] = []

  create({ name }: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      createdAt: new Date().getTime(),
    }
    this.brands.push(brand)
    return brand
  }

  findAll(): Brand[] {
    return this.brands
  }

  findOne(id: string): Brand {
    const brand: Brand = this.brands.find((b: Brand) => b.id === id)
    if (!brand) {
      throw new NotFoundException(`Brand with id "${id}" not found `)
    }
    return brand
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB: Brand = this.findOne(id)
    this.brands = this.brands.map((brand: Brand) => {
      if (brand.id === id) {
        brandDB.updatedAt = new Date().getTime()
        brandDB = { ...brandDB, ...updateBrandDto }
        return brandDB
      }
      return brand
    })
    return brandDB
  }

  remove(id: string) {
    this.brands = this.brands.filter((b: Brand) => b.id !== id)
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands
  }
}
