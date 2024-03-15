import { FC } from "react";
import Input from "../../components/Input";
import PhoneInput from "../../components/PhoneInput";
import { FormProvider, useForm } from "react-hook-form";
import { UserRegisterType } from "../../types";
import { useCreateContact } from "./useCreateContact";
import LoadingOverlay from "../../components/LoadingOverlay";


const EditContact: FC = () => {
  const methods = useForm<UserRegisterType>();
  const { onSubmit, isLoading } = useCreateContact();

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 uppercase">
            Adicionar Contato
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <FormProvider {...methods}>
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <div>
                <Input
                  type="text"
                  name="nome"
                  autofocus
                  label="Nome ou Apelido"
                  validation={{
                    required: "O nome é obrigatório",
                    minLength: {
                      value: 3,
                      message: "Este campo deve conter no mínimo 3 letras",
                    },
                  }}
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  label="E-mail"
                  validation={{
                    required: "E-mail obrigatório",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "E-mail inválido",
                    },
                  }}
                />
              </div>

              {/* <div>
                <Input
                  type="text"
                  name="telefone"
                  label="Celular"
                  placeholder="99 99999-9999"
                  validation={{
                    pattern: {
                      value: /^\d{2}\s\d{5}-\d{4}$/,
                      message: "Telefone inválido"
                    }
                  }}
                />
              </div> */}

              <div>
                <PhoneInput
                  name="telefone"
                  label="Celular"
                  placeholder="99 99999-9999"
                  validation={{
                    pattern: {
                      value: /^\d{2}\s\d{5}-\d{4}$/,
                      message: "Telefone inválido"
                    }
                  }}
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="notas"
                  label="Notas"
                  validation={{
                    maxLength: { value: 142, message: "Nota ultrapassa número máximo de 142 caracteres" },
                  }}
                />
              </div>

              <div>
                <Input
                  type="file"
                  name="foto"
                  label="Foto"
                  accept=".png, .jpeg, .jpg"
                  validation={{
                    required: "A foto é obrigatório",
                  }}
                />
              </div>

              <div>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Adicionar
                </button>
              </div>
            </form>
          </FormProvider>

        </div>
      </div>
      <LoadingOverlay isLoading={isLoading} message="Enviando..."/>
    </>
  );
};

export default EditContact;
