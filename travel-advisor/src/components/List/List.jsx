import React from 'react';
import { useState } from 'react';
import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select } from '@material-ui/core';
import useStyles from './styles';

const List = () => {

const classes=useStyles();
const [type,setType]= useState('restaurants');
const [rating,setRating]= useState('');

const places=[
    {name:'Cool Places'},
    {name:'Best Beer'},
    {name:'Best Steak'},
    {name:'Cool Places'},
    {name:'Best Beer'},
    {name:'Best Steak'},
    {name:'Cool Places'},
    {name:'Best Beer'},
    {name:'Best Steak'},
];


  return (
    <div className={classes.container}>
        <Typography variant="h4">Restaurants,Hotels & Attractions around you </Typography>
        <FormControl className={classes.formcontrol}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e)=> setType(e.target.value)}>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
        </FormControl>
        <FormControl className={classes.formcontrol}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e)=> setRating(e.target.value)}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>Above 3</MenuItem>
                <MenuItem value={4}>Above 4</MenuItem>
                <MenuItem value={4.5}> Above 4.5</MenuItem>
            </Select>
        </FormControl>
        <Grid container spacing={3} className={classes.list}>
            {places?.map((place,i)=>(
                <Grid item key={i} xs={12}>
                {/* <CARD/> */}
                </Grid>
            ))}
        </Grid>
    </div>
  );
            }

export default List
