
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";

import DashboardLayout from "../../Layouts/Dashboard/DashboardLayout";
import Homes from "../../Pages/Homes/Homes";
import Competitions from "../../Pages/Competitions/Competitions";






export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
       
        children: [
            {
                path: '/',
                element: <Homes></Homes>
            },
            {
                path: '/competitions',
                element: <Competitions/>
            }
          
           
        ]
    },
    {
        path: '/dashboard',
        element: 
            <DashboardLayout></DashboardLayout>,
        
        children:[
            {
                path: '/dashboard',
                element: <>dashboard</>
            },
           
        ]
    }
    
]);