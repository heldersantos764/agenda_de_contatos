import { FieldValues, RegisterOptions } from "react-hook-form";

export interface UserLoginType {
    email: string;
    senha: string;
}

export interface UserRegisterType extends UserLoginType {
    foto: File | Blob | string;
    email: string;
    confirmeSenha?: FieldValues;
}

export interface ValidationRules {
    required?: RegisterOptions["required"];
    minLength?: RegisterOptions["minLength"];
    maxLength?: RegisterOptions["maxLength"];
    pattern?: RegisterOptions["pattern"];
    validate?: (fieldValues: FieldValues) => string | boolean;
}