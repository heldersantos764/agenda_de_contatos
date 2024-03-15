import axios from "axios";
import { BASE_URL_BECK_END } from "../configContantsApp";
import { UserLoginType, UserRegisterType } from "../types";
import { UserResponseType } from "./types";

const useUserService = () => {
    const auth = async (userLogin: UserLoginType): Promise<UserResponseType | null> => {
        try {
            const response = await axios.post(`${BASE_URL_BECK_END}auth`, userLogin, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            return response.data; 
        } catch (error) {
            return null;
        }
    }
    
    /**
     * registra um novo usuário na api
     */
    const createUser = async (userRegister: UserRegisterType): Promise<UserResponseType | null> => {
        try {
            const response = await axios.post(`${BASE_URL_BECK_END}user`, userRegister, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            return response.data; 
        } catch (error) {
            return null;
        }
    }

    return {
        auth,
        createUser
    }
}

export { useUserService };