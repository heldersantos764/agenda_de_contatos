import { FC } from "react";
import { ContactPropsType } from "./types";

const CardContact: FC<ContactPropsType> = (props) => {
  const { data } = props;
  return (
    <div className="border border-slate-200 shadow rounded p-4 text-sm leading-6 mt-10">
      <img
        className="w-12 h-12 rounded-full ring-2 mx-auto mb-6"
        src="./src/assets/logo.png"
        alt=""
      />
      <div>
        <span className="font-medium">Nome:</span> {data.nome}
      </div>
      <div>
        <span className="font-medium">Apelido:</span> {data.apelido}
      </div>
      <div>
        <span className="font-medium">E-mail:</span> {data.email}
      </div>
      <div>
        <span className="font-medium">Telefone:</span> {data.telefones?.numero}
      </div>
      <div>
        <span className="font-medium">Endereço:</span> {data.endereco?.logradouro}
      </div>
      <hr />
      <div className="flex-auto flex space-x-4">
        <button
          className="h-10 px-6 font-semibold rounded-md bg-indigo-600 text-white mt-5 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="button"
        >
          Editar
        </button>
        <button
          className="h-10 px-6 font-semibold rounded-md bg-indigo-600 text-white mt-5 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="button"
        >
          <svg width="20" height="20" fill="currentColor" aria-hidden="true">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardContact;
