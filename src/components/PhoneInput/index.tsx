import { FC, ChangeEvent } from "react";
import { InputProps, PhoneValue } from "./types";
import Input from "../Input";

const PhoneInput: FC<InputProps> = ({ value, onChange, ...rest }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue: PhoneValue = {
      tipo: "celular", // Defina o tipo de telefone como "celular"
      num: e.target.value
    };
    onChange!(newValue as any);
  };

  return (
    <Input
      type="text"
      value={value ? value.num : ""} // Acessa o número do telefone no objeto de valor
      onChange={handleChange} // Passa a função de handleChange para lidar com as alterações
      {...rest}
    />
  );
};

export default PhoneInput;
