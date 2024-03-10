import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  return (
    <>
      Dashboard
      <br />
      <Link to={'/'}>Go to Home</Link>
    </>
  );
};

export default Dashboard;