import { UserDataType } from "../services/types";
import { useEffect, useState } from "react";

const useDataUser = () => {
    const [userData, setUserData] = useState<UserDataType | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const jsonData: string | null = window.localStorage.getItem("@auth");
            if (jsonData) {
                const data = JSON.parse(jsonData);
                setUserData(data);
            }
        };

        fetchData();
    }, []);

    const getUserFirstName = () : string => {
        if (userData) {
            const firstName = userData.nome.split(' ')[0].trim();
            const capitalizeName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
            return capitalizeName;
        }
        return '';
    }

    return {
        userData,
        getUserFirstName
    }
};

export { useDataUser };
