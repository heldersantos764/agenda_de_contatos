import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const navigate = useNavigate();

  const logout = (): void => {
    window.localStorage.clear();
    navigate('/');
  };

  return (
    <>
      Dashboard
      <br />
      <Link to={"/"}>Go to Home</Link>
      <button onClick={logout}>Sair</button>
    </>
  );
};

export default Dashboard;
