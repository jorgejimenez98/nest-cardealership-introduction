import { Brand } from 'src/brands/entities/brand.entity'
import { v4 as uuid } from 'uuid'

export const BRAND_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Brand 1',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Tesla 1',
    createdAt: new Date().getTime(),
  },
]
