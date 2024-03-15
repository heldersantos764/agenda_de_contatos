import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

type TitleContextType = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setHasBackButton: React.Dispatch<React.SetStateAction<boolean>>;
  hasBackButton: boolean;
};

interface TitleContextProps {
  children: ReactNode;
}

const TitleContext = createContext<TitleContextType | undefined>(undefined);

export const TitleProvider: FC<TitleContextProps> = (props) => {
  const { children } = props;
  const [title, setTitle] = useState("");
  const [hasBackButton, setHasBackButton] = useState(false);

  return (
    <TitleContext.Provider value={{ title, setTitle, setHasBackButton, hasBackButton}}>
      {children}
    </TitleContext.Provider>
  );
};

export const useTitle = () => {
  const context = useContext(TitleContext);
  if (!context) {
    throw new Error("useTitle deve ser usado dentro de um TitleProvider");
  }
  return context;
};
