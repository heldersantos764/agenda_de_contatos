import axios from "axios";
import { UserLoginType, UserRegisterType } from "../types";
import { UserResponseType } from "./types";
import { BASE_URL_BECK_END } from "../configContantsApp";

export const auth = async (userLogin: UserLoginType): Promise<UserResponseType | null> => {
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
export const createUser = async (userRegister: UserRegisterType): Promise<UserResponseType | null> => {
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

