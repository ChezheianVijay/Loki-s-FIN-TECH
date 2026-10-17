import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './styles/App.css';


const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));

const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));
const Dashboard = lazy(() => import('./components/Dashboard'));

const Home = lazy(() => import('./pages/Home'));
const Users = lazy(() => import('./pages/Users'));
const Products = lazy(() => import('./pages/Products'));

const User = lazy(() => import('./pages/User'));
const Product = lazy(() => import('./pages/Product'));

function App() {
    return (
        <BrowserRouter>

            <Suspense fallback={<div>Loading...</div>}>

                <Routes>
                    <Route path='/' element={<Navigate to="/login" />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/dashboard' element={
                        // <ProtectedRoute>
                            <Dashboard />
                        // </ProtectedRoute>
                    } >
                        <Route index element={<Home />} />
                        <Route path='users' element={<Users />} />
                        <Route path='users/cruduser' element={<User />} />
                        <Route path='products' element={<Products />} />
                        <Route path='products/crudproduct' element={<Product />} />
                    </Route>

                </Routes>

            </Suspense>

        </BrowserRouter>
    );
}

export default App;
