import { IsInt, IsDefined, IsString, IsOptional } from "class-validator";
import { emailadresses, phonenumbers } from "./";

export class users {
    @IsDefined()
    @IsInt()
    id!: number;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    surname?: string;

    @IsOptional()
    @IsString()
    note?: string;

    @IsOptional()
    @IsString()
    company?: string;

    @IsDefined()
    emailadresses!: emailadresses[];

    @IsDefined()
    phonenumbers!: phonenumbers[];
}
