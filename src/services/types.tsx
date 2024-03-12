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