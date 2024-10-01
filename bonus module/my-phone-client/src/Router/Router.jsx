import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import Phones from "../components/phones/Phones";
import Phone from "../components/Phone/Phone";


    const router = createBrowserRouter([
        {
            path:'/',
            element:<Root></Root>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/phones',
                    element:<Phones></Phones>,
                    loader:()=>fetch('http://localhost:5000/phones/')
                },
                {
                    path:'/phone/:id',
                    element:<Phone></Phone>,
                    loader:({params})=>fetch(`http://localhost:5000/phones/${params.id}`)
                }
            ]

        }
    ])


export default router;