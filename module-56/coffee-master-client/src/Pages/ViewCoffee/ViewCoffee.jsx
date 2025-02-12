import { useLoaderData, useNavigate } from "react-router-dom";

const ViewCoffee = () => {
    const coffee = useLoaderData()
    const navigate = useNavigate()

    const handleBackToHome = ()=>{
        navigate('/')
    }
    return (
        <div className="w-[80%] mx-auto mt-16">
            <button onClick={handleBackToHome} className="text-[#331A15] shadow-md btn">Back to Home</button>
            <div className="bg-[#F4F3F0] px-40 flex flex-col justify-around items-center lg:flex-row">
                <div>
                   <img src={coffee.photo} alt="" /> 
                </div>
                <div>
                    <h3 className="text-2xl ranchoFont text-[#331A15]">Nicetice</h3>
                    <p className="text-lg font-medium">
                    Name: <span className="font-normal text-[#5C5B5B]">{coffee.name} </span> 
                    </p>
                    <p className="text-lg font-medium">
                    Chef: <span className="font-normal text-[#5C5B5B]">{coffee.chef} </span> 
                    </p>
                    <p className="text-lg font-medium">
                    Supplier: <span className="font-normal text-[#5C5B5B]">{coffee.supplier} </span> 
                    </p>
                    <p className="text-lg font-medium">
                    taste: <span className="font-normal text-[#5C5B5B]">{coffee.taste} </span> 
                    </p>
                    <p className="text-lg font-medium">
                    Category: <span className="font-normal text-[#5C5B5B]">{coffee.category} </span> 
                    </p>
                    <p className="text-lg font-medium">
                    Details: <span className="font-normal text-[#5C5B5B]">{coffee.details} </span> 
                    </p>
                </div>
            </div>
            {coffee.name}, {coffee.chef}, {coffee.taste}
        </div>
    );
};

export default ViewCoffee;