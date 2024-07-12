import { Box, Button, Checkbox, FormLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { addTour } from '../../api-helpers/api-helpers';

const labelProps = {
    mt:1,
    mb:1
}
const AddTour = () => {
    const [inputs,setInputs] = useState({place:"",description:"",picsUrl:"",bookingDate:"",featured:false});
    const [attractions,setAttractions]=useState([""]);
    const [attraction,setAttraction]=useState("");

    const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
          console.log(inputs,attractions);
            addTour({ ...inputs, attractions })
             .then((res) => console.log(res))
             .catch((err) => console.log(err));
        



    };
  return (
    <div>
        <form onSubmit={handleSubmit}> 
            <Box 
                width={"50%"}
                padding={10}
                margin="auto"
                display={"flex"}
                flexDirection="column"
                boxShadow={"10px 10px 20px #ccc"}>

                    <Typography textAlign={"center"} variant="h5" fontFamily={"verdana"}>Add New Tour</Typography>
                    <FormLabel  sx={labelProps}>Place</FormLabel>
                    <TextField value={inputs.place} onChange={handleChange} name='place' variant='standard' margin='normal'/>
                    <FormLabel sx={labelProps}>Description</FormLabel>
                    <TextField value={inputs.description} onChange={handleChange} name='description' variant='standard' margin='normal'/>
                    <FormLabel sx={labelProps}>Pics Url</FormLabel>
                    <TextField value={inputs.picsUrl} onChange={handleChange} name='picsUrl' variant='standard' margin='normal'/>
                    <FormLabel sx={labelProps}>Booking Date</FormLabel>
                    <TextField type={"date"} value={inputs.bookingDate} onChange={handleChange} name='bookingDate' variant='standard' margin='normal'/>
                    <FormLabel sx={labelProps}>Attractions </FormLabel>
                    <Box display={"flex"}>
                        <TextField value={attraction} name='attractions' onChange={(e)=>setAttraction(e.target.value)} variant='standard' margin='normal'/>
                        <Button onClick={() => {
                            setAttractions([...attractions, attraction]);
                            setAttraction("");
                            }}>Add
                        </Button>

                    </Box>
                <FormLabel sx={labelProps}>Featured</FormLabel>
                <Checkbox name='featured' checked={inputs.featured} onClick={(e)=>setInputs((prevState)=>({...prevState,featured:e.target.checked}))} sx={{mr:'auto'}}/>
                <Button 
                    type='submit'
                    variant='contain' sx={{
                    width: "30%",
                    margin: "auto",
                    bgcolor: "#2b2d42",
                    ":hover": {
                    bgcolor: "#121217",
                        },}}>

                    Add New Tour
                </Button>
                    
                    

            </Box>
        </form>
    </div>
  )
}

export default AddTour