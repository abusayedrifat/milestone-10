
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import Coffees from "../components/CoffeeCollections/Coffees";
import UpdateCoffee from "../Pages/UpadateCoffee/UpdateCoffee";
import ViewCoffee from "../Pages/ViewCoffee/ViewCoffee";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import Users from "../Pages/Users/Users";
 
const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://coffee-master-server-psi.vercel.app/coffees')
            },
            {
                path:'/addCoffee',
                element:<AddCoffee></AddCoffee>
            },
            
            {
                path:'/coffees/update/:id',
                loader:({params})=>fetch(`https://coffee-master-server-psi.vercel.app/coffees/${params.id}`),
                element:<UpdateCoffee></UpdateCoffee>
            },
            {
                path:'/coffees/:id',
                loader:({params})=>fetch(`https://coffee-master-server-psi.vercel.app/coffees/${params.id}`),
                element:<ViewCoffee></ViewCoffee>
            },
            {
                path:'/signIn',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/users',
                element:<Users></Users>,
                loader:()=>fetch('https://coffee-master-server-psi.vercel.app/users')
            }
         
        ]
    }
])

export default router