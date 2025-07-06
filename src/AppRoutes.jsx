import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/home/Home';
import MainLayout from './components/layouts/MainLayout';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />} >
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
    );
};

export default AppRoutes;