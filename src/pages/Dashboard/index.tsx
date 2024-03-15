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
  const [contacts, setContacts] = useState<ContactResponseType[] | null>([]);

  useEffect(() => {
    setHasBackButton(false);
    setTitle("Meus contatos");

    const fetchContacts = async () => {
      try {
        const response = await findAllContacts();
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
          return (
            <Contact
              key={contact.id}
              id={contact.id}
              nome={contact.nome}
              email={contact.email}
              telefone={contact.telefones[0].numero}
              foto={contact.foto}
            />
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
