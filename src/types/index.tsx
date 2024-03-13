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

export interface PhoneType {
  tipo: string;
  numero: string;
}

export interface AddressType{
    logradouro: string;
    cidade: string;
    estado: string;
    cep: string;
    pais: string;
}

export interface ContactType {
  id: string;
  nome: string;
  idUsuario: string;
  apelido?: string;
  email?: string;
  notas?: string;
  foto?: string;
  telefones?: PhoneType;
  endereco?: AddressType;
}
