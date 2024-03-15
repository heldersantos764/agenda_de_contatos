import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useAlert = () => {
    const showLoadingAlert = () => {
        Swal.fire({
        title: "Aguarde...",
        text: "Carregando...",
        allowOutsideClick: false,
        showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            },
        });
    };
  
    const showSuccessAlert = (message: string) => {
    Swal.fire({
      icon: "success",
      title: "Sucesso!",
      text: message,
      confirmButtonText: "OK",
    }).then(() => {
      window.history.back();
    });
  };
  
  const showErrorAlert = (message: string) => {
    Swal.fire({
        icon: "error",
        title: "Erro!",
        text: message,
        confirmButtonText: "OK",
        });
    };

    const closeAlerts = () => {
      Swal.close()
    }

    return {
        showErrorAlert,
        showLoadingAlert,
        showSuccessAlert,
        closeAlerts
    }
}

export { useAlert }