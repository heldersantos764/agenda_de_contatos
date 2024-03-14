import { FC, useEffect } from "react";
import { useTitle } from "../../contexts/TitleContext";

const EditContact: FC = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Editar Contato");
  }, []);

  return (
    <>
      EditContact
    </>
  );
};

export default EditContact;