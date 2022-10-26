import React from 'react';
import { Link } from "react-router-dom";
import {Button, Stack, Typography, Typrgraphy} from "@mui/material";

const ExerciseCard = ({exercise}) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`} maxWidth='100%'>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction="row" justifyContent="flex-start">
            <Button sx={{ml:"20px", color:"#fff", background:"#ffa9a9", fontSize:'14px', borderRadius:'20px', textTransform:'capitalize'}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ml:"20px", color:"#fff", background:"#fcc757", fontSize:'14px', borderRadius:'20px', textTransform:'capitalize'}}>
                {exercise.bodyPart}
            </Button>
        </Stack>
        <Typography ml='21px' color="#000" fontWeight="bold" mt='15px' pb='10px' textTransform="capitalize" fontSize="20px">
            {exercise.name}
        </Typography>
    </Link>
  );
}

export default ExerciseCard