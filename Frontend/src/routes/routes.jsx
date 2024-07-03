import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplaySearch from '../pages/DisplaySearch.jsx';
import DMPage from '../pages/DMPage.jsx';
import Home from '../pages/Home.jsx';
import NotFound from '../pages/NotFound.jsx';
import PhotoDetail from '../pages/PhotoDetail.jsx';
import Profile from '../pages/Profile.jsx';
import RegisterPage from '../pages/RegisterPage/RegisterPage.jsx';
import Search from '../pages/Search.jsx';
import Settings from '../pages/Settings.jsx';
import Upload from '../pages/Upload.jsx';
import LoginPage from '../pages/LoginPage/LoginPage.jsx';


const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/DisplaySearch" element={<DisplaySearch />} />
        <Route path="/DMPage" element={<DMPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/PhotoDetail" element={<PhotoDetail />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

  );
};

export default AppRoutes;
