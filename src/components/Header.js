import React, { useEffect, useState } from 'react'
import {AppBar, Autocomplete, Box, IconButton, Tab, Tabs, TextField, Toolbar} from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { getAllTours } from '../api-helpers/api-helpers';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminActions, userActions } from '../store';



const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAdminLoggedIn = useSelector((state)=>state.admin.isLoggedIn)
    const isUserLoggedIn = useSelector((state)=>state.user.isLoggedIn)
    const [value,setValue]=useState(0);
    const [tours,setTours]=useState([])
   
    useEffect(()=>{
      getAllTours().then((data)=>setTours(data.tours)).catch((err)=>console.log(err))
      
    },[])
    const logout =(isAdmin)=>{
        dispatch(isAdmin?adminActions.logout():userActions.logout())

    }
    const handleChange=(e,val)=>{
        
        const tour = tours.find((m)=>m.place===val)
        if(isUserLoggedIn){
            navigate(`/booking/${tour._id}`)

        }

    }
      
  return (
    <AppBar position="sticky" sx={{bgcolor:"#135cab"}}>
        <Toolbar>
            <Box width={'20%'}>
                <IconButton LinkComponent={Link} to="/">
                <TravelExploreIcon/>
                </IconButton>
            </Box>
            <Box width={'30%'} margin={'auto'}>
                <Autocomplete onChange={handleChange}
                
                freeSolo
                options={ tours && tours.map((option) => option.place)}
                renderInput={(params) => <TextField sx={{input:{color:"black"}}} variant="standard"{...params} placeholder="Search Tours" />}
                />
            </Box >
            <Box display={'flex'}>
                <Tabs textColor='inherit' indicatorColor="secondary" value={value} onChange={(e,val)=>setValue(val)}>
                    <Tab LinkComponent={Link} to="/tours" label="Tours"/>
                    {!isAdminLoggedIn && !isUserLoggedIn && (
                    <>
                        <Tab LinkComponent={Link} to="/admin" label="Admin"/>
                        <Tab LinkComponent={Link} to="/auth" label="Auth"/>
                    </>
                )}
                {isUserLoggedIn && (
                    <>
                    <Tab LinkComponent={Link} to="/user" label="Profile"/>
                    <Tab onClick={()=>logout(false)} LinkComponent={Link} to="/" label="Logout"/>
                
                    </>
                )}
                {isAdminLoggedIn && (
                    <>
                    <Tab LinkComponent={Link} to="/add" label="Add Tours"/>
                    <Tab LinkComponent={Link} to="/user-admin" label="Profile"/>
                    <Tab onClick={()=>logout(true)} LinkComponent={Link} to="/" label="Logout"/>
                
                    </>
                )}
                    
                </Tabs>

            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header