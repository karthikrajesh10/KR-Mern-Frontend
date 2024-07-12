
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Tours from './components/Tours/Tours';
import Admin from './components/Auth/Admin'
import Auth from './components/Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { adminActions, userActions } from './store';
import Booking from './components/Bookings/Booking';
import UserProfile from './profile/UserProfile';
import AddTour from './components/Tours/AddTour';
import AdminProfile from './profile/AdminProfile';

function App() {
  
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state)=>state.admin.isLoggedIn)
  const isUserLoggedIn = useSelector((state)=>state.user.isLoggedIn)
  console.log("isAdminLoggedIn",isAdminLoggedIn);
  console.log("isUserLoggedIn",isUserLoggedIn);
  useEffect(()=>{
    if(localStorage.getItem("userId")){
      dispatch(userActions.login());
      
    }else if(localStorage.getItem("adminId")){
      dispatch(adminActions.login())
    }
  },[])
  return (
    <div>
      <Header/>
      <section>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/tours" element={<Tours/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/user" element={<UserProfile/>}/>
          <Route path="/add" element={<AddTour/>}/>
          <Route path="/user-admin" element={<AdminProfile/>}/>
          <Route path="/booking/:id" element={<Booking/>}/>


        </Routes>
      </section>
     
    </div>
  );
}

export default App;
