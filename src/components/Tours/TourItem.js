import { Button, Card, CardActions, CardContent,  Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const TourItem = ({place,bookingDate,picsUrl,id}) => {
  return (
    <Card sx={{ margin:2,width: 250,height:320,borderRadius:5,":hover":{
        boxShadow:"10px 10px 20px #ccc"
    } }}>
    <img
          src={picsUrl}
          alt={place}
          width={"100%"}
          height={"50%"}
        />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {place}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {new Date(bookingDate).toDateString()}
      
      </Typography>
    </CardContent>
    <CardActions>
      <Button LinkComponent={Link} to={`/booking/${id}`} sx={{margin:"auto"}} size="small">Book</Button>
      
    </CardActions>
  </Card>
  )
}

export default TourItem