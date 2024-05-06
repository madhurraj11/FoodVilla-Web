import React from 'react';
import ReactDOM from 'react-dom/client';
import "../Project.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from './components/Body';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantsMenu';
import Profile from "./components/ProfileClass";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const AppLayOut=()=>{
    return(
        <React.Fragment>    
            <Header/>
            <Outlet/>
            <Footer/>
        </React.Fragment>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayOut />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />,  
            },
            {
                path: '/about',
                element: <About />, 
                children: [ //nested routing
                    {
                        path: "profile",
                        element: <Profile />,
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact />, 
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
        ],
    },
    { 
        path: "login",
        element: <Login />,
    },
])

    
const root = ReactDOM.createRoot(document.getElementById('root'));
/// passing a react element inside the root.
root.render(<RouterProvider router={appRouter} />);