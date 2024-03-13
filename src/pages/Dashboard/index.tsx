import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  GridCard from "../../components/GridCard";
import { Modal } from "../../components/Modal";
import { CreateContact } from "../../components/CreateContact";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const logout = (): void => {
    window.localStorage.clear();
    navigate('/');
  };

  return (
    <>
      <h1>Dashboard</h1>
      
      <Link to={"/"}>Go to Home</Link>
      <button onClick={logout}>Sair</button>
      <Link to={'/'}>Go to Home</Link>
      <button className="flex w-full mx-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={()=> setOpen (true) }>
        Adicionar contato
      </button>
      <Modal open={open} >
      <button className="bg-red-200 px-3 text-white shadow-sm hover:bg-danger focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-danger" onClick={()=> setOpen (false) }>
        X
      </button>
        <CreateContact />
      </Modal>
      <GridCard/>
    </>
  );
};

export default Dashboard;
