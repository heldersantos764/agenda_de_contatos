import { FC } from "react";
import Input from "../../components/Input";
import { FormProvider, useForm, Controller } from "react-hook-form";
import { useCreateContact } from "../../pages/Register/useCreateContact";
import LoadingOverlay from "../../components/LoadingOverlay";
import TextareaAutosize from 'react-textarea-autosize';



const CreateContact: FC = () =>{

    const methods = useForm<FormData>();
    const { onSubmit, isLoading } = useCreateContact();
  
    const fileToBase64 = (file: File | Blob): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
  
        reader.onload = function (event) {
          if (event.target?.result && typeof event.target.result === "string") {
            resolve(event.target.result);
          } else {
            reject(new Error("Falha ao ler o arquivo como base64."));
          }
        };
  
        reader.onerror = function () {
          reject(new Error("Erro ao ler o arquivo."));
        };
  
        reader.readAsDataURL(file);
      });
    };

    return(
        <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 uppercase">
            Cadastre um novo contato
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
                  label="Nome"
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
                  type="text"
                  name="apelido"
                  label="Apelido"
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

              <div>
                <Input
                  type="text" //alterar para objetos
                  name="telefone"
                  label="Telefone"
                  validation={{
                    required: "Telefone obrigatório",
                    pattern: {
                      value: /^[0-9]{8,}$/, // Aceita no mínimo 8 dígitos numéricos
                      message: "Telefone inválido",
                    },
                  }}
                />
              </div>

              <div>
                <Controller
                name="notas"
                control={methods.control}
                defaultValue="" // Valor inicial (pode ser vazio)
                render={({ field }) => (
                    <TextareaAutosize
                    {...field}
                    placeholder="Notas"
                    minRows={5} // Defina o número mínimo de linhas
                    maxRows={8} // Defina o número máximo de linhas (opcional)
                    />
                )}
                />
              </div>
                  
              <div>
                <Input
                  type="text" //add objetos
                  name="endereco"
                  label="Endereço"
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
                  Cadastrar contato
                </button>
                <button onClick={()=>setOpen (false)}></button>
              </div>
            </form>
          </FormProvider>

        </div>
      </div>
      <LoadingOverlay isLoading={isLoading} message="Enviando..."/>
    </>
    )
}

export {CreateContact}