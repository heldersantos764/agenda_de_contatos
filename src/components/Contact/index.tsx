import { FC} from "react";
import { userContact } from "./useContact";
interface Props {}

const Contact: FC<Props> = () => {

  const { handleOnClick } = userContact();


  return (
      <div id="1415" onClick = {(e) => handleOnClick(e) } className="flex flex-row bg-white shadow-md hover:shadow-lg hover:shadow-slate-300 w-full rounded-lg overflow-hidden border-2 border-white hover:border-gray-200 cursor-pointer">
        <div
          className="h-40 bg-gray-300 bg-cover bg-center w-1/4"
          style={{
            backgroundImage: `url(https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg)`,
          }}
        ></div>

        <div className="p-4 w-3/4">
          <h3 className="text-xl font-semibold mb-2 capitalize">nome completo</h3>
          <div className="text-gray-700">
            <span className="font-bold">Celular: </span>(88) 9 8877-5544
          </div>
          <div className="text-gray-700">
            <span className="font-bold">E-mail: </span>teste@gmail.com
          </div>
          <div className="text-gray-700">
            <span className="font-bold">Notas: </span>(88) 9 8877-5544
          </div>
        </div>
      </div>
  );
};

export default Contact;
