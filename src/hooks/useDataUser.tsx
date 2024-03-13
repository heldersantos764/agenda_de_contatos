import { UserDataType } from "../services/types";

const useDataUser = () => {

    const getData= () : UserDataType => {
        const jsonData: string= window.localStorage.getItem("@auth") as string;
        const data = JSON.parse(jsonData);
        return data;
    }

    const getUserFirstName = () : string => {
        const firstName = getData().nome.split(' ')[0].trim();
        const capitalizeName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
        return capitalizeName;
    }

    return {
        getData,
        getUserFirstName
    }

};

export { useDataUser };
