import  { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { fetchFromAPI } from '../Utils/fetchFromAPI'

import {  Videos } from './'

const SearchFeed = () => {
  const [ videos, setVideos ] = useState([])
  const { searchTerm } = useParams();


 useEffect(() => {
  fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
  .then((data) => setVideos(data.items))
 }, [searchTerm]);


  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh',flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }} >
       Search Results for: <span style={{ color: '#f31503' }}>{searchTerm}Videos</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed

/*
import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;*/