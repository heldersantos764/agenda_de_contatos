import { ChangeEvent } from "react";
import { ValidationRules } from "../../types";

type inputType = "text" | "password" | "email" | "file" | "textarea" | "hidden";

export interface InputProps {
    type?: inputType;
    value?: string;
    placeholder?: string;
    id?: string;
    name: string;
    label?: string;
    autofocus?: boolean;
    onInput?: (value: string) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    validation?: ValidationRules;
    accept?: string;
    mask?: string;
}