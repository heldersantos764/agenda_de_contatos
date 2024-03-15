import { FC } from "react";
import { InputProps } from "./types";
import { useFormContext } from "react-hook-form";

const Input: FC<InputProps> = (props) => {
  const {
    type = "text",
    name,
    id,
    autofocus = false,
    label,
    validation,
  } = props;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div>
        <input
          {...register(name as string, validation)}
          id={id}
          type={type}
          autoFocus={autofocus}
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {errors[name] && (
          <small className="text-rose-600">
            {errors[name]?.message as string}
          </small>
        )}
      </div>
    </div>
  );
};

export default Input;

{
  /* <InputMask
            {...register(name as string, validation)}
            id={id}
            type={type}
            autoFocus={autofocus}
            value={value || ''}
            mask={mask}
            className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          /> */
}
