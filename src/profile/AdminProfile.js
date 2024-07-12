import React, { Fragment, useEffect, useState } from 'react'
import {  getAdminById, } from '../api-helpers/api-helpers'
import { Box, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const AdminProfile = () => {
  
  const [admin,setAdmin]=useState();
  useEffect(()=>{
    
    getAdminById().then((res)=>setAdmin(res.ad)).catch((err) => console.log(err));
  },[]);
  
  
  return (
    <Box width="100%" display={"flex"}>
        
        <Fragment>
          {""}
          {admin && (
            <Box 
              
              flexDirection={"column"}
              justifyContent="center"
              alignItems={"center"}
              width={"30%"}
              padding={3}
              >

            <AccountCircleIcon sx={{ fontSize: "10rem" ,textAlign:'center',ml:18}}/>
            
            <Typography 
              mt={1}
              padding={1}
              width={"auto"}
              textAlign={"center"}
              border={"1px solid #ccc"}
              borderRadius={10}> 
              Email : {admin.email}
                

            </Typography>

          </Box>)}
          {admin && admin.addedTours.length>0 &&   (
            <Box width={"70%"} display="flex" flexDirection={"column"}>
              <Typography 
              variant="h3"
              fontFamily={"verdana"}
              textAlign="center"
              padding={2}>
                Added Tours

              </Typography>
              <Box margin="auto" display="flex" flexDirection={"column"} width="80%">
                <List>
                  {admin.addedTours.map((tour,index)=>(
                    <ListItem 
                      sx={{
                      bgcolor: "#0038d3",
                      color: "white",
                      textAlign: "center",
                      margin: 1,
                      }}>
                      <ListItemText sx={{ margin: 1, width: "auto", textAlign: "left" }}>Tour : {tour.place}</ListItemText>
                     
                      

                      
                        


                    </ListItem>

                ))}
              </List>

            </Box>
          </Box>)}
        
        </Fragment>

    </Box>
  )
}

export default AdminProfile