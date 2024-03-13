import { FC, ReactNode } from "react";
import Header from "../components/Header";
import { useTitle } from "../contexts/TitleContext";

interface DefaultLaytoutProps {
  children: ReactNode;
}

const DefaultLaytout: FC<DefaultLaytoutProps> = ({ children }) => {
  const { title } = useTitle();

  return (
    <div className="bg-gray-100 font-sans">
      <Header />

      <main className="mt-16 p-4">
        <div className="bg-white p-6 rounded shadow-lg">
          <h1 className="text-xl font-bold mb-4 uppercase">{title}</h1>
          <p>{children}</p>
        </div>
      </main>
    </div>
  );
};

export default DefaultLaytout;
