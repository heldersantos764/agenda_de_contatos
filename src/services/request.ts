import axios from "axios";
import { UserLoginType, UserRegisterType } from "../types";
import { UserResponseType } from "./types";

const BASE_URL = "http://localhost:5000/";

const genarateUrl = (params: string): string => {
    return `${BASE_URL}${params}`;
} 

export const auth = async (userLogin: UserLoginType) => {
    
}

/**
 * registra um novo usuário na api
 */
export const createUser = async (userRegister: UserRegisterType): Promise<UserResponseType | null> => {
    try {
        const response = await axios.post(genarateUrl('user'), userRegister, {
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
 * registra um novo contato na api
 */
export const createContact = async (contactRegister: UserRegisterType): Promise<UserResponseType | null> => {
    try {
        const response = await axios.post(genarateUrl('contact'), contactRegister, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data; 
    } catch (error) {
        return null;
    }
}