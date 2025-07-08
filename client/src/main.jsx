import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Homepage from './routes/Homepage.jsx';
import PostList from './routes/PostList.jsx';
import SinglePost from './routes/SinglePost.jsx';
import RegisterPage from './routes/RegisterPage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import WritePage from './routes/WritePage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import { ClerkProvider } from '@clerk/clerk-react';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'


import { ToastContainer } from 'react-toastify';


const queryClient = new QueryClient();

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


let router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/posts",
        element: <PostList />,
      },
      {
        path: "/:slug",
        element: <SinglePost />,
      },
      {
        path: "/write",
        element: <WritePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer position='bottom-right' />
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>,
)
