import { FC, useEffect } from "react";
import Input from "../../components/Input";
import PhoneInput from "../../components/PhoneInput";
import { FormProvider, useForm } from "react-hook-form";
import { ContactRegisterType} from "../../types";
import { useEditContact } from "./useEditContact";
import LoadingOverlay from "../../components/LoadingOverlay";
import { useTitle } from "../../contexts/TitleContext";


const EditContact: FC = () => {
  const methods = useForm<ContactRegisterType>();
  const { onSubmit, isLoading } = useEditContact();

  const { setTitle, setHasBackButton } = useTitle();

  useEffect(() => {
    setHasBackButton(true);
    setTitle("Contato");    
  }, []);

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 lg:px-8">

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
