import React, {useEffect, useState} from 'react';
import { Box, Button, Stack, TextField, Typography, Container} from '@mui/material';
import {exerciseOptions, fetchData} from "../utils/fetchData";
import HorizontalScrollBar from './HorizontalScrollBar';
const SearchExercises = ({bodyPart, setBodyPart, setExercises}) => {
  const [value, setValue] = useState("");
  // const [exercises, setExercises] = useState([]);
  const[bodyParts, setBodyParts] = useState([]);

  // get bodyparts while app loaded 
  useEffect( () => {
    const fetchExerciesData = async ()=>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
      setBodyParts(['all',...bodyPartsData]);
      console.log(bodyParts);
    };
    fetchExerciesData();
  },[])

  // when submit search exercises 
  const handleSearch = async ()=> {
    if(value)
    {
      // alert(value)
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      const searchedExercises = exercisesData.filter(
        (exercise)=> 
          exercise.name.toLowerCase().includes(value) 
          || exercise.target.toLowerCase().includes(value)
          || exercise.equipment.toLowerCase().includes(value)
          || exercise.bodyPart.toLowerCase().includes(value)
      )
      setValue('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Container>
      <Stack alignItems="center" justifyContent="center" p='30px'>
        <Typography fontWeight={700} textAlign="center" sx={{fontSize:{lg:'40px', xs:'24px'}}} mb="40px">
          Awesome Exercises You<br /> Should Know
        </Typography>
        <Box positin="relative" mb="70px" display="flex" justifyContent="center" alignItems="center" width="100%">
          <TextField 
            value={value}
            onChange={(e) => {setValue(e.target.value.toLowerCase())}}
            placeholder="Search Exercises"
            type="text"
            sx={{width:"calc(100% - 100px)", border:"none", borderRadius:"4px", backgroundColor:"#fff"}}
            height='76px'
          />
          <Button className="search-btn" sx={{backgroundColor:'#ff2625', color:"#fff", textTransform:"capitalize", height:"56px", width:"100px"}} height="56px" onClick={handleSearch} >submit</Button>
        </Box>
      </Stack>
      <Box >
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>
    </Container>
  )
}

export default SearchExercises