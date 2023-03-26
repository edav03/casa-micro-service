import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class CardsDto {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsString()
    name: string;

    @IsDate()
    lastActivity: Date;

    @IsDate()
    lastSync: Date;

    @IsDate()
    dateCreated: Date;

    @IsString()
    id_list: string;
}
