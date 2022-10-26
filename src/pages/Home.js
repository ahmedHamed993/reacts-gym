import React, {useState} from 'react'
import { Box } from '@material-ui/core'
// import components 
import HeroBanner from "../components/HeroBanner.js";
import SearchExercises from "../components/SearchExercises.js";
import Exercises from "../components/Exercises.js";

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  // console.log(bodyPart);
  console.log(exercises);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>
    </Box>
  )
}

export default Home