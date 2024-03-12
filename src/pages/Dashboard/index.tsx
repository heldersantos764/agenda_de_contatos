import { FC } from "react";
import { Link } from "react-router-dom";
import  GridCard from "../../components/GridCard";

interface Props {
  
}

const Dashboard: FC<Props> = (props) => {
  return (
    <>
      Dashboard
      <br />
      <Link to={'/'}>Go to Home</Link>
      <GridCard/>
    </>
  );
};

export default Dashboard;