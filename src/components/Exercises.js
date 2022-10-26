import React, {useEffect, useState} from 'react';
import  Pagination  from '@mui/material/Pagination';
import {Box, Stack, Typography, Container} from "@mui/material";
import { exerciseOptions, fetchData} from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
const Exercises = ({exercises, setExercises, bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9 ;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1300, behavior:"smooth"});
  }
  useEffect(()=>{
    const fetchExercisesData = async ()=>{
      let exercisesData =[];
      if(bodyPart === "all")
      {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      }
      else 
      {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
      }
      setExercises(exercisesData);
      window.scrollTo({top:1300, behavior:"smooth"});

    }
    fetchExercisesData();
  },[bodyPart])
  return (
    <Container>
    <Box id="exercises"
      sx={{ mt: {lg:'60px'} , mt:'30px'}}
      p="20px"
    >
      <Typography variant="h3" sx={{mb:'20px'}}>Showing Results</Typography>
      <Stack direction="row" sx={{gap:{lg:'30px', sx:'15px'}}} flexWrap="wrap" justifyContent="center">
        {
          currentExercises.map((exercise, index)=>(
            <ExerciseCard key={index} exercise={exercise} />
          ))
        }
      </Stack>
      <Stack mt="100px" alignItems="center">
        {
          exercises.length > exercisesPerPage && (
          <Pagination 
            color="standard" 
            shape="rounded" 
            defaultPage={1} 
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
          />
          )
        }
      </Stack>
    </Box>
    </Container>
  )
}

export default Exercises