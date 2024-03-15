import { FC} from "react";
import { userContact } from "./useContact";

interface ContactProps {
  nome: string,
  email: string
}

const Contact: FC<ContactProps> = (props) => {
  const { nome, email } = props
  const { handleOnClick } = userContact();


  return (
      <div id="321321" onClick = {(e) => handleOnClick(e) } className="flex flex-row align-middle bg-white shadow-md hover:shadow-lg hover:shadow-slate-300 w-full rounded-lg overflow-hidden border-2 border-white hover:border-gray-200 cursor-pointer">
        <div
          className="bg-gray-300 bg-cover bg-center w-32 h-32 rounded-full m-4"
          style={{
            backgroundImage: `url(https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg)`,
          }}
        ></div>

        <div className="p-4 h-[100%]">
          <h3 className="text-xl font-semibold mb-2 uppercase">{nome}</h3>
          <div className="text-gray-700">
            <span className="font-bold">Celular: </span>(88) 9 8877-5544
          </div>
          <div className="text-gray-700">
            <span className="font-bold">E-mail: </span>{email}
          </div>
        </div>
      </div>
  );
};

export default Contact;
