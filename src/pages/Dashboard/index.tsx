import { FC, useEffect } from "react";
import { useTitle } from "../../contexts/TitleContext";
import Contact from "../../components/Contact";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const Dashboard: FC = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Meus contatos");
  }, []);

  return (
    <>
      <div className="relative">
        <Link to="/edit-contact/1" className="bg-primary text-white p-4 rounded-full absolute -top-14 right-0 hover:bg-blue-600 z-40">
          <IoMdAdd title="Novo Contato" />
        </Link>
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
