import { useNavigate } from "react-router-dom";

const userContact = () => {

    const navigate = useNavigate()

    const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = e.currentTarget.getAttribute("id");
        navigate(`/contact-details/${id}`);
    }

    return {
        handleOnClick
    }
}

export {userContact}