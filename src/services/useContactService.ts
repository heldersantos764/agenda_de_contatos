import axios from "axios";
import { ContactType } from "../types";
import { BASE_URL_BECK_END } from "../configContantsApp";
import { ContactResponseType, UserDataType } from "./types";

const useContactService = () => {

    const findAllContacts = async (): Promise<ContactResponseType[] | null> => {
        try {
            const auth = localStorage.getItem('@auth');
            if (!auth) {
                throw new Error('Token not found in localStorage');
            }

            const response = await axios.get(`${BASE_URL_BECK_END}contact`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': (JSON.parse(auth) as UserDataType).token
                }
            });

            return response.data; 
        } catch (error) {
            return null;
        }
    }

    const findContact = async (id: string): Promise<ContactResponseType | null > => {
        try{
            const auth = localStorage.getItem('@auth');
            if (!auth) {
                throw new Error('Token not found in localStorage');
            }
            console.log(`${BASE_URL_BECK_END}contact/${id}`)

            const response = await axios.get(`${BASE_URL_BECK_END}contact/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': (JSON.parse(auth) as UserDataType).token
                }
            });

            return response.data; 
        }catch(error){
            return null;
        }
    }

    const createContact = async (contactRegister: ContactType): Promise<ContactResponseType | null> => {
        try {

            const auth = localStorage.getItem('@auth');
            if (!auth) {
                throw new Error('Token not found in localStorage');
            }

            const response = await axios.post(`${BASE_URL_BECK_END}contact`, contactRegister, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': (JSON.parse(auth) as UserDataType).token
                }
            });

            return response.data; 
        } catch (error) {
            return null;
        }
    }

    return {
        createContact,
        findAllContacts,
        findContact
    };
}

export { useContactService };