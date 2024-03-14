import { useState } from "react";
import { showErrorAlert, showLoadingAlert } from "../../components/Alerts";
import { auth } from "../../services/request";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: any): Promise<void> => {
    setIsLoading(true);
    showLoadingAlert();
    const user = { ...data };
    const response = await auth(user);

    console.log(response);

    if (response?.status && response?.status === 200) {
      window.localStorage.setItem("@auth", JSON.stringify(response.data) as string);
      Swal.close();
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
