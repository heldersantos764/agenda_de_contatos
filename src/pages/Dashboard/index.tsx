import { FC, useEffect, useState } from "react";
import CardContact from "../../components/CardContact";
import { useTitle } from "../../contexts/TitleContext";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const {setTitle} = useTitle();

  useEffect(() => {
    setTitle("Início")
  }, [])

  return (
    <>
      <CardContact
        data={{
          id: "",
          nome: "Helder",
          idUsuario: "",
        }}
      />
    </>
  );
};

export default Dashboard;
