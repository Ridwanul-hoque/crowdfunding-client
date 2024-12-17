import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout.jsx';
import AllCampaign from './Components/AllCampaign.jsx';
import NewCampaign from './Components/NewCampaign.jsx';
import Login from './Pages/Login.jsx';
import Campaign from './Components/Campaign.jsx';
import Donation from './Components/Donation.jsx';
import Home from './Components/Home.jsx';
import Registration from './Pages/Registration.jsx';
import CampaignDetail from './Pages/CampaignDetail.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivateRoute from './Routes/PrivateRouter.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      // {
      //   path: '/',
      //   element: <Home></Home>,
      //   // loader: () => fetch('https://coffee-store-server-mqsl4ji21-ridwanul-hoques-projects.vercel.app/coffee')
      // },
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/campaign')
      },
      {
        path: 'home', 
        element: <Home></Home>,
      },
      {
        path: 'allCampaign',
        element: <AllCampaign></AllCampaign>,
        loader: () => fetch('http://localhost:5000/campaign')
      },
      {
        // path: 'updateCoffee/:id',
        path: 'Campaign',
        element: <PrivateRoute><Campaign></Campaign></PrivateRoute>,
        // loader: () => fetch(`http://localhost:5000/campaign?email=${user.email}`)
      },
      {
        // path: 'updateCoffee/:id',
        path: 'newCampaign',
        element: <PrivateRoute><NewCampaign></NewCampaign></PrivateRoute>,
        // loader: ({ params }) => fetch(`https://coffee-store-server-mqsl4ji21-ridwanul-hoques-projects.vercel.app/coffee/${params.id}`)
      },
      {
        // path: 'updateCoffee/:id',
        path: 'donation',
        element: <PrivateRoute><Donation></Donation></PrivateRoute>,
        // loader: ({ params }) => fetch(`https://coffee-store-server-mqsl4ji21-ridwanul-hoques-projects.vercel.app/coffee/${params.id}`)
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Registration></Registration>
      },
      // {
      //   path:'users',
      //   element:<Users></Users>,
      //   // loader: ()=> fetch('https://coffee-store-server-mqsl4ji21-ridwanul-hoques-projects.vercel.app/users')
      // }
    ]
  },
  {
    path: "campaignDetail/:id",
    element: <PrivateRoute><CampaignDetail></CampaignDetail></PrivateRoute>,
    loader: ({params}) => fetch(`http://localhost:5000/campaign/${params.id}`)
      
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
