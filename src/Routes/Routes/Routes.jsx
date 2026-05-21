
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";

import DashboardLayout from "../../Layouts/Dashboard/DashboardLayout";
import Homes from "../../Pages/Homes/Homes";
import Competitions from "../../Pages/Competitions/Competitions";
import Winners from "../../Pages/Winners/Winners";
import HowItWorks from "../../Pages/Homes/HowItWorks";
import About from "../../Pages/About/About";






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
            },
            {
                path: '/winners',
                element: <Winners/>
            },
            {
                path: '/how-it-works',
                element: <HowItWorks/>
            },
            {
                path: '/about-us',
                element: <About/>
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