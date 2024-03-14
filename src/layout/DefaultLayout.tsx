import { FC, ReactNode } from "react";
import Header from "../components/Header";
import { useTitle } from "../contexts/TitleContext";

interface DefaultLaytoutProps {
  children: ReactNode;
}

const DefaultLaytout: FC<DefaultLaytoutProps> = ({ children }) => {
  const { title } = useTitle();

  return (
    <div className="bg-gray-300 font-sans flex justify-center">
      <Header />

      <main className="mt-16 p-4 w-full max-w-screen-lg">
        <div className="bg-gray-100 p-6 rounded shadow-lg shadow-gray-500">
          <h1 className="text-xl font-bold mb-4 uppercase">{title}</h1>
          <div>{children}</div>
        </div>
      </main>
    </div>
  );
};

export default DefaultLaytout;
