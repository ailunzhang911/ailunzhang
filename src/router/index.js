import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from '../page/index/Home';
import Invitation from '../page/index/Invitation';
import Wallet from '../page/index/Wallet';
import CustomerService from '../page/index/CustomerService';
import User from '../page/index/User';
import Lhc from '../page/Cai/Lhc';
const router = createBrowserRouter([
    {
      path:'/',
      element:<App />,
      children: [
         {
               index: true,
               element: <Home/>         
          },          
        {
               path: 'Home',
               element: <Home/>
          },          
          {
               path: 'Invitation',
               element: <Invitation/>
          },
        {
               path: 'Wallet',
                element: <Wallet/>
           },
         {
                path: 'CustomerService',
               element: <CustomerService/>
            },
         {
                path: 'User',
                element: <User/>
            }    
        ]
    },
    {
         path: 'Lhc',
         element: <Lhc/>
     }    
])
export default router;