import { ChangeEvent } from "react";
import { ValidationRules } from "../../types";

type inputType = "text" | "password" | "email" | "file" | "textarea";

export interface InputProps {
    type?: inputType;
    placeholder?: string;
    id?: string;
    name: string;
    label?: string;
    autofocus?: boolean;
    onInput?: (value: string) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    validation?: ValidationRules;
    accept?: string;
    value?: { tipo: string, num: string };
}

export interface PhoneValue {
    tipo: string;
    num: string;
  }