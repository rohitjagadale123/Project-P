import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import SigninPage from './SigninPage'
import HomePage from './HomePage'



const NvigationPage = () => {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<SigninPage/>
        },
        {
            path:'/home',
            element:<HomePage/>
        },
       

    ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default NvigationPage;