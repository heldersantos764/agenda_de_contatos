import { SubmitHandler } from "react-hook-form";
import { UserRegisterType } from "../../types";
import { useState } from "react";
import { useUserService } from '../../services/useUserService'
import { useAlert } from "../../hooks/useAlert";

const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { createUser} = useUserService();
  const { showErrorAlert, showLoadingAlert, showSuccessAlert } = useAlert();

  const onSubmit: SubmitHandler<UserRegisterType> = async (data: any) => {
    setIsLoading(true);
    showLoadingAlert();
    const user = { ...data };
    delete user.confirmeSenha;
    const base64String = await fileToBase64(user.foto[0]);
    user.foto = base64String;
    const response = await createUser(user);
    
    if(response?.status && response?.status === 200){
      showSuccessAlert("Usuário cadastrado com sucesso.")
    }else{
      showErrorAlert("Usuário já cadastrado.")
    }

    setIsLoading(false);
  };

  const fileToBase64 = (file: File | Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = function (event) {
        if (event.target?.result && typeof event.target.result === "string") {
          resolve(event.target.result);
        } else {
          reject(new Error("Falha ao ler o arquivo como base64."));
        }
      };

      reader.onerror = function () {
        reject(new Error("Erro ao ler o arquivo."));
      };

      reader.readAsDataURL(file);
    });
  };

  return {
    onSubmit,
    isLoading,
  };
};

export { useRegister };
