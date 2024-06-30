import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Card,CardMedia,CardContent,CardActions,  Button, Grid, Typography} from '@mui/material'


const Basetab = () => {
  var[output,setOutput]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res.data);
            setOutput(res.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    },[])
 
  return (
  <div>
    <Typography variant="h1" style={{color:'bisque', textAlign:'center',fontStyle:'revert'}}>Walmart</Typography>
    <Grid container spacing={3} sx={{padding:3}}>
     
      {output.map((val,i)=>(
        <Grid item xs={12} sm={6} md={4} key={i}>
      <Card  sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title={val.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small">save</Button>
      </CardActions>
    </Card>
    </Grid>
      
      ))}
      </Grid>
      </div>
    )
  }
  
export default Basetab
