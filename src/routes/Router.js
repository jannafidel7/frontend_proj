import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import ProtectedRoute from 'src/views/routes/ProtectedRoute';


/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const HeaderOnly = Loadable(lazy(() => import('../layouts/full/HeaderOnly')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')))
const Icons = Loadable(lazy(() => import('../views/icons/Icons')))
const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')))
const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const UsersList = Loadable(lazy(() => import('../views/user/UsersList')))
const NewUser = Loadable(lazy(() => import('../views/user/NewUser')))
const UpdateUser = Loadable(lazy(() => import('../views/user/UpdateUser')))
const ProductList  = Loadable(lazy(() => import('../views/products/ProductList')))
const NewProduct  = Loadable(lazy(() => import('../views/products/NewProduct')))
const UpdateProduct  = Loadable(lazy(() => import('../views/products/UpdateProduct')))
const Index  = Loadable(lazy(() => import('../views/shop/Index')))
const ProductDetails  = Loadable(lazy(() => import('../views/shop/ProductDetails')))
const Cart  = Loadable(lazy(() => import('../views/cart/Cart')))
const Shipping  = Loadable(lazy(() => import('../views/cart/Shipping')))
const ConfirmOrder  = Loadable(lazy(() => import('../views/cart/ConfirmOrder')))
const Payment  = Loadable(lazy(() => import('../views/cart/Payment')))
const OrderSuccess  = Loadable(lazy(() => import('../views/cart/OrderSuccess')))
const OrdersList  = Loadable(lazy(() => import('../views/orders/OrdersList')))
const ProcessOrder  = Loadable(lazy(() => import('../views/orders/ProcessOrders')))
const Profile  = Loadable(lazy(() => import('../views/user/Profile')))
const UpdateProfile  = Loadable(lazy(() => import('../views/user/UpdateProfile')))
const UpdatePassword  = Loadable(lazy(() => import('../views/user/UpdatePassword')))
const ListOrders  = Loadable(lazy(() => import('../views/myorder/ListOrders')))
const OrderDetails  = Loadable(lazy(() => import('../views/myorder/OrderDetails')))
const ProductReviews = Loadable(lazy(() => import('../views/reviews/ProductReviews')))
const ForgotPassword = Loadable(lazy(() => import('../views/authentication/ForgotPassword')))
const NewPassword = Loadable(lazy(() => import('../views/authentication/NewPassword')))
const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/home" /> },
      { path: '/dashboard', element:  <ProtectedRoute isAdmin={true}> <Dashboard/> </ProtectedRoute>  },
      { path: '/admin/users', exact: true, element: <ProtectedRoute isAdmin={true}><UsersList /> </ProtectedRoute>},
      { path: '/admin/newuser', exact: true, element: <ProtectedRoute isAdmin={true}> <NewUser /> </ProtectedRoute> },
      { path: '/admin/user/:id', exact: true, element:<ProtectedRoute isAdmin={true}> <UpdateUser /> </ProtectedRoute>},
      { path: '/admin/products', exact: true, element: <ProtectedRoute isAdmin={true}> <ProductList /> </ProtectedRoute>},
      { path: '/admin/newproduct', exact: true, element: <ProtectedRoute isAdmin={true}><NewProduct />  </ProtectedRoute>},
      { path: '/admin/product/:id', exact: true, element: <ProtectedRoute isAdmin={true}><UpdateProduct /> </ProtectedRoute>},
      { path: '/admin/orders', exact: true, element: <ProtectedRoute isAdmin={true}><OrdersList /></ProtectedRoute> },
      { path: '/admin/order/:id', exact: true, element: <ProtectedRoute isAdmin={true}><ProcessOrder/> </ProtectedRoute>},
      { path: '/admin/reviews', exact: true, element: <ProtectedRoute isAdmin={true}><ProductReviews/> </ProtectedRoute>},
      { path: '/sample-page', exact: true, element: <SamplePage /> },
      { path: '/icons', exact: true, element: <Icons /> },
      { path: '/ui/typography', exact: true, element: <TypographyPage /> },
      { path: '/ui/shadow', exact: true, element: <Shadow /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },

  {
    path: '/',
    element: <HeaderOnly />,
    children: [
      { path: '/home', element: <Index /> },
       { path: '/search/:keyword', element: <Index /> },
      { path: '/product/:id', element: <ProductDetails /> },
      { path: '/cart', element: <Cart /> },
      { path: '/shipping', element: <Shipping /> },
      { path: '/confirm', element: <ConfirmOrder /> },
      { path: '/payment', element: <Payment /> },
      { path: '/success', element: <OrderSuccess /> },
      { path: '/me', element: <Profile /> },
      { path: '/me/update', element: <UpdateProfile /> },
      { path: '/password/update', element: <UpdatePassword /> },
      { path: '/orders/me', element: <ListOrders /> },
      { path: '/order/:id', element: <OrderDetails /> },
     



    ],
  },
  { path: '/password/forgot', element: <ForgotPassword /> },
      { path: '/password/reset/:token', element: <NewPassword /> },

  

 
];

export default Router;
