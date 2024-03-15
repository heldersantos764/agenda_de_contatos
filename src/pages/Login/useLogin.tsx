import { useState } from "react";
import { useUserService } from "../../services/useUserService";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../hooks/useAlert";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { auth } = useUserService();
  const { showErrorAlert, showLoadingAlert, closeAlerts} = useAlert()

  const onSubmit = async (data: any): Promise<void> => {
    setIsLoading(true);
    showLoadingAlert();
    const user = { ...data };
    const response = await auth(user);

    console.log(response);

    if (response?.status && response?.status === 200) {
      window.localStorage.setItem("@auth", JSON.stringify(response.data) as string);
      closeAlerts();
      navigate("/dashboard");
    } else {
      showErrorAlert("Usuário ou senha incorreta.");
    }

    setIsLoading(false);
  };

  return {
    onSubmit,
    isLoading,
  };
};

export { useLogin };
