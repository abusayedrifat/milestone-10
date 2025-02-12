import { Link, useLoaderData } from "react-router-dom";
import Coffees from "../../components/CoffeeCollections/Coffees";
import Banner from "../../components/Banner/Banner";
import Overview from "../../components/Banner/Overview";
import './home.css'
import { GiCoffeeCup } from "react-icons/gi";
import { useEffect, useState } from "react";

const Home = () => {
    const loadedCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffees) 
    //  useEffect(()=>{
    //     window.scroll(0,0)
    //   },[])
    return (
        <div>
            <Banner></Banner>
            <Overview></Overview>
            <div className="mx-auto w-96 text-center space-y-4 pt-20">
              <p className="text-[#1B1A1A] relewayFont text-xl"> --- Sip & Savor --- </p>
              <h2 className="text-5xl text-[#331A15] ranchoFont">Our Popular Products </h2>
              <Link to='/addCoffee'> <button className="btn ranchoFont text-white bg-[#E3B577] border-[#331A15] px-3 py-2 text-xl mt-5 addCoffeeBtn"> Add Coffee <span className="text-[#331A15] ml-1 text-2xl"> <GiCoffeeCup></GiCoffeeCup> </span> </button></Link>
            </div>
            <div className="backgroundImg">
                <div className="grid grid-cols-2 gap-6 px-56 mt-10 ">
            
            {
                coffees.map(coffee => <Coffees key={coffee._id} coffee={coffee} coffees={coffees} setCoffees = {setCoffees}></Coffees> )
            }
            </div>
            </div>
            
            
        </div>
    );
};

export default Home;