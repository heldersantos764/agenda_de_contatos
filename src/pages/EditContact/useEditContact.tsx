import { SubmitHandler } from "react-hook-form";
import { ContactRegisterType} from "../../types";
import { useContactService } from "../../services/useContactService"
import { useEffect, useState } from "react";
import { showErrorAlert, showLoadingAlert, showSuccessAlert } from "../../components/Alerts";


const useEditContact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [contactData, setContactData] = useState<ContactType | null>(null);
  const { createContact } = useContactService();

  const onSubmit: SubmitHandler<ContactRegisterType> = async (data: any) => {
    setIsLoading(true);
    showLoadingAlert();
    const contact = { ...data };
    const base64String = await fileToBase64(contact.foto[0]);
    contact.foto = base64String;
    const response = await createContact(contact);
    
    if(response?.status && response?.status === 200){
      showSuccessAlert("Contato cadastrado com sucesso.")
    }else{
      showErrorAlert("Erro ao cadastrar contato.")
      console.log(data)
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

  useEffect(() => {
    if (isEditing) {
      console.log('Editando');
    }
  }, [isEditing]);

  return {
    onSubmit,
    isLoading,
    isEditing,
    setIsEditing,
    contactData
  };
};

export { useEditContact };
