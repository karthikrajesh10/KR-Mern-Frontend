import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getTourDetails, newBooking } from '../../api-helpers/api-helpers'
import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';

const Booking = () => {
    const [tour,setTour]=useState();
    const [inputs,setInputs]=useState({members:"",date:""});
    const id = useParams().id
    console.log(id)
    useEffect(()=>{
        getTourDetails(id)
            .then((res)=>setTour(res.tour))
            .catch(err=>console.log(err));
    },[id]);
    const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs)
        newBooking({...inputs,tour:tour._id}).then((res)=>console.log(res)).catch(err=>console.log(err))
    }
    
  return (
    <div>
        {tour && 
            <Fragment>
                <Typography 
                    padding={3}
                    fontFamily="fantasy"
                    variant="h4"
                    textAlign={"center"}>
                        Book Tour Package : {tour.place}

                </Typography>
                <Box display={"flex"} justifyContent={"center"}>
                    <Box  
                        display={"flex"}
                        justifyContent={"column"}
                        flexDirection="column"
                        paddingTop={3}
                        width="50%"
                        marginRight={"auto"}>
                            <img width="80%" height={"300px"}src={tour.picsUrl} alt={tour.place}/>
                            <Box width={"80%"} marginTop={3} padding={2}>
                                <Typography addingTop={2}>{tour.description}</Typography>
                                <Typography fontWeight={'bold'} marginTop={1}>
                                    Attractions : 
                                    {tour.attractions.map((attraction)=>"" +attraction + " ")}
                                </Typography>
                                <Typography fontWeight={"bold"} marginTop={1}>
                                    Tour Date :{ new Date(tour.bookingDate).toDateString()}
                                </Typography>
                            </Box>

                    </Box>
                    <Box width={"50%"} paddingTop={3}>
                        <form onSubmit={handleSubmit}>
                            <Box 
                                padding={5}
                                margin={"auto"}
                                display="flex"
                                flexDirection={"column"}>

                                    <FormLabel>Members</FormLabel>
                                    <TextField value={inputs.members} onChange={handleChange} name='members' type={'number'} margin='normal' variant='standard'/>
                                    <FormLabel>Booking Date</FormLabel>
                                    <TextField value={inputs.date} onChange={handleChange} name='date' type={'date'} margin='normal' variant='standard'/>
                                    <Button type="submit" sx={{ mt: 3 }}>Book Now</Button>

                            </Box>
                        </form>

                    </Box>

                </Box>

            
            </Fragment>}
    </div>
  )
}

export default Booking