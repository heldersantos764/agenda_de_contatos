import { FC } from "react";
import Input from "../../components/Input";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login: FC = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 uppercase">
          Login
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
                type="email"
                name="email"
                autofocus
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
                type="password"
                name="Senha"
                label="Senha"
                validation={{
                  required: "Senha obrigatória",
                  minLength: { value: 8, message: "Minimo 8" },
                }}
              />
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Entrar
              </button>
            </div>
          </form>
        </FormProvider>

        <p className="mt-10 text-center text-sm text-gray-500">
          Não tem uma conta?&nbsp;
          <Link
            to="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
