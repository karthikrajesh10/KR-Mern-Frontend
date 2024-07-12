import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import img01 from '../components/images/tour.jpg' 
import TourItem from './Tours/TourItem'
import { Link } from 'react-router-dom'
import { getAllTours } from '../api-helpers/api-helpers'

const HomePage = () => {

  const [tours,setTours]=useState([]);
  useEffect(()=>{
    getAllTours().then((data)=>setTours(data.tours)).catch(err=>console.log(err))
  },[])  
  console.log(tours)
  return (
    <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
        <Box margin={"auto"} width="85%" height={"60vh"} padding={2}>
        
        <img
          src={img01}
          alt="Maldives"
          width={"100%"}
          height={"100%"}
        />
            
            
        </Box>

        <Box padding={5} margin="auto">
            <Typography variant='h4' textAlign={"center"}>Latest Tours</Typography>

        </Box>
        <Box margin={"auto"}
        display="flex"
        width="80%"
        justifyContent={"center"}
        alignItems="center"
        flexWrap="wrap">
            { tours &&  tours.slice(0,4).map((tour,index)=><TourItem id={tour.id} place={tour.place} picsUrl={tour.picsUrl} bookingDate={tour.bookingDate} key={index}/>)}

        </Box>
        <Box display="flex" padding={5} margin="auto">
            <Button LinkComponent={Link} to="/tours" variant="outlined" sx={{ margin: "auto", color: "#2b2d42" }}>
                View All Tours

            </Button>

        </Box>
    </Box>
  )
}

export default HomePage