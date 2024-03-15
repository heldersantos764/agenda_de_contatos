import { FC, useEffect, useState } from "react";
import { useTitle } from "../../contexts/TitleContext";
import Contact from "../../components/Contact";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContactService } from "../../services/useContactService";
import { ContactResponseType } from "../../services/types";

const Dashboard: FC = () => {
  const { setTitle, setHasBackButton } = useTitle();
  const { findAllContacts } = useContactService();
  const [contacts, setContacts] = useState<ContactResponseType[]>([]);

  useEffect(() => {
    setHasBackButton(false);
    setTitle("Meus contatos");

    const fetchContacts = async () => {
      try {
        const response = await findAllContacts();
        console.log(response.data);
        if (response !== null && Array.isArray(response.data)) {
          setContacts(response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar contatos:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <>
      <div className="relative">
        <Link
          to="/create-contact"
          className="bg-primary text-white p-4 rounded-full absolute -top-14 right-0 hover:bg-blue-600 z-40"
        >
          <IoMdAdd title="Novo Contato" />
        </Link>
      </div>
      <div className="flex gap-4 flex-row flex-wrap">
        {contacts.map((contact) => {
          console.log(contact.email); // Acessando a propriedade email diretamente
          return (
            // Renderizar componentes Contact ou outras informações do contato
            <Contact key={contact.id} {...contact} />
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
