import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/pages/home/Home';
import MainLayout from './components/layouts/MainLayout';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Resources from './components/pages/resources/Resources';
import Blogs from './components/pages/blogs/Blogs';
import AddBlogs from './components/pages/AddBlogs';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />} >
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/add-blog" element={<AddBlogs />} />
          </Route>
        </Routes>
    );
};

export default AppRoutes;