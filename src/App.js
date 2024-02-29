import { Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteNav from './components/Common/SiteNav';
import SiteFooter from './components/Common/SiteFooter';
import HomePage from './components/home/HomePage';
import LoginPage from './auth/LoginPage';
import RegisterPage from './auth/RegisterPage';
import Contacts from './components/contacts/contacts';



function App() {
  return (
    <div >
      <SiteNav />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}

export default App;
