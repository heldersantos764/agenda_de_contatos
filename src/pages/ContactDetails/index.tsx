import { FC, useEffect, useState } from "react";
import { ContactResponseType } from "../../services/types";
import { useContactService } from "../../services/useContactService";
import { useTitle } from "../../contexts/TitleContext";
import { useParams } from "react-router-dom";

interface Props {}

const ContactDetails: FC<Props> = (props) => {
  const { id } = useParams();
  const { setTitle, setHasBackButton } = useTitle();
  const [contact, setContact] = useState<ContactResponseType | null>();
  const { findContact } = useContactService();

  useEffect(() => {
    setHasBackButton(true);
    setTitle("Contato");

    const fetchContacts = async () => {
      try {
        const response = await findContact(id as string);
        if (response !== null) {
          console.log(response.data);
          setContact(response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar contatos:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <>{JSON.stringify(contact)}</>
    // <div className="flex flex-col align-middle bg-white shadow-md hover:shadow-lg hover:shadow-slate-300 w-full rounded-lg overflow-hidden border-2 border-white">
    //   <div className="flex flex-row align-middlew-full rounded-lg overflow-hidden">
    //     <div
    //       className="bg-gray-300 bg-cover bg-center w-32 h-32 rounded-full m-4"
    //       style={{
    //         backgroundImage: `url(${contact.foto})`,
    //       }}
    //     ></div>

    //     <div className="p-4 h-[100%]">
    //       <h3 className="text-xl font-semibold mb-2 uppercase">
    //         {contact.nome}
    //       </h3>
    //       <div className="text-gray-700">
    //         <span className="font-bold">Celular: </span>
    //         {contact.telefones[0].numero}
    //       </div>
    //       <div className="text-gray-700">
    //         <span className="font-bold">E-mail: </span>
    //         {contact.email}
    //       </div>
    //       <div className="text-gray-700">
    //         <span className="font-bold">Notas: </span>
    //         {contact.notas}
    //       </div>
    //     </div>
    //   </div>

    //   <div className="p-4">
    //     <button className="py-2 px-5 bg-primary hover:bg-blue-600 mr-4 text-white rounded-sm">
    //       Editar
    //     </button>
    //     <button className="py-2 px-5 bg-red-800 hover:bg-red-600 mr-4 text-white rounded-sm">
    //       Excluir
    //     </button>
    //   </div>
    // </div>
  );
};

export default ContactDetails;
