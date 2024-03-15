import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const showLoadingAlert = () => {
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

export const showSuccessAlert = (message: string) => {
  Swal.fire({
    icon: "success",
    title: "Sucesso!",
    text: message,
    confirmButtonText: "OK",
  }).then(() => {
    const navidate = useNavigate();
    navidate(-1);
  });
};

export const showErrorAlert = (message: string) => {
  Swal.fire({
    icon: "error",
    title: "Erro!",
    text: message,
    confirmButtonText: "OK",
  });
};
