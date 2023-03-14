import { IsDefined, IsString, IsOptional, IsInt } from "class-validator";
import { users } from "./";

export class phonenumbers {
    @IsDefined()
    id!: BigInt;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    number?: string;

    @IsOptional()
    @IsInt()
    userid?: number;

    @IsOptional()
    users?: users;
}
