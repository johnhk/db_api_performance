import { IsDefined, IsString, IsOptional, IsInt } from "class-validator";
import { users } from "./";

export class emailadresses {
    @IsDefined()
    id!: BigInt;

    @IsOptional()
    @IsString()
    email?: string;

    @IsOptional()
    @IsInt()
    userid?: number;

    @IsOptional()
    users?: users;
}
