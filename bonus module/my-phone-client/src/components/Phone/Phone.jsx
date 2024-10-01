import { useLoaderData } from "react-router-dom";

const Phone = () => {
    const phone = useLoaderData()
    const {phone_name,image} = phone
    return (
        <div>
            <img src={image} alt="" />
            <p> {phone_name} </p>
        </div>
    );
};

export default Phone;