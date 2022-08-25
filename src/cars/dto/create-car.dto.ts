import { IsString } from "class-validator"

export class CreateCarDto {
    @IsString({message: 'The Brand Must Be a cool string'})
    readonly brand: string
    @IsString()
    readonly model: string
}