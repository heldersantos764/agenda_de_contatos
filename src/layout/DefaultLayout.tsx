import { FC, ReactNode } from "react";
import Header from "../components/Header";
import { useTitle } from "../contexts/TitleContext";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface DefaultLaytoutProps {
  children: ReactNode;
}

const DefaultLaytout: FC<DefaultLaytoutProps> = ({ children }) => {
  const { title, hasBackButton } = useTitle();
  const navigate = useNavigate();

  const handleClickBackPage = () => {
    navigate(-1);
  }

  return (
    <div className="bg-gray-300 font-sans flex justify-center min-h-screen">
      <Header />

      <main className="mt-16 p-4 w-full max-w-screen-lg">
        <div className="bg-gray-100 p-6 rounded shadow-lg shadow-gray-500">
          <div className="flex align-middle flex-row gap-2">
            {hasBackButton ? (
              <span onClick={handleClickBackPage} className="bg-primary rounded-full p-2 w-10 h-10 hover:bg-blue-600 cursor-pointer">
                <IoArrowBack size={25} color="white" />
              </span>
            ) : (
              ""
            )}
            <h1 className="text-xl mt-1 font-bold mb-4 uppercase flex flex-row align-middle gap-3">
              {title}
            </h1>
          </div>
          <div>{children}</div>
        </div>
      </main>
    </div>
  );
};

export default DefaultLaytout;
