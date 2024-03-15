import { ContactType } from "../types";

export interface UserDataType {
    id: string;
    email: string;
    nome: string;
    foto: string;
    token?: string;
}

export interface UserResponseType {
    data: UserDataType;
    status: number;
}

export interface ContactResponseType {
    data: ContactType;
    status: number;
}