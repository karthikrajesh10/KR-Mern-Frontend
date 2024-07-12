import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllTours } from '../../api-helpers/api-helpers';
import TourItem from './TourItem';


const Tours = () => {
    const [tours, setTours] = useState();
    useEffect(() => {
      getAllTours()
        .then((data) => setTours(data.tours))
        .catch((err) => console.log(err));
    }, []); 
  return (
    <Box margin={"auto"} marginTop={4}>
        <Typography margin={"auto"}
        variant="h4"
        padding={2}
        width="40%"
        bgcolor={"#282828"}
        color="white"
        textAlign={"center"}>

            All Tours

        </Typography>
        <Box width={"100%"}
        margin="auto"
        marginTop={5}
        display={"flex"}
        justifyContent="flex-start"
        flexWrap={"wrap"}>
            {tours && tours.map((tour,index)=><TourItem key={index} id={tour._id} picsUrl={tour.picsUrl} bookingDate={tour.bookingDate} place={tour.place}/>)}

        </Box>

    </Box>
  )
}

export default Tours