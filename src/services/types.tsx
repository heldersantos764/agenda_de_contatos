export interface UserDataType {
    id: string;
    email: string;
    nome: string;
    foto: string;
}

export interface UserResponseType {
    data: UserDataType;
    status: number;
}