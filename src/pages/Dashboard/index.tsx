import { FC, useEffect, useState } from "react";
import CardContact from "../../components/CardContact";
import { useTitle } from "../../contexts/TitleContext";
import Contact from "../../components/Contact";
import { IoMdAdd } from "react-icons/io";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Meus contatos");
  }, []);

  return (
    <>
      <div className="relative">
        <button className="bg-primary text-white p-4 rounded-full absolute -top-14 right-0 hover:bg-blue-600 z-40">
          <IoMdAdd title="Novo Contato"/>
        </button>
      </div>
      <div className="flex gap-4 flex-row flex-wrap">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </>
  );
};

export default Dashboard;
