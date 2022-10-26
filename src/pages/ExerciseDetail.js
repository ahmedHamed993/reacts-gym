import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box,Container} from "@mui/material";
import {exerciseOptions, youtubeOptions, fetchData} from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState({});
  const [targetMuscleExercise, setTargetMuscleExercises] = useState({});
  const [equipmentExercises, setEquipmentExercises] = useState({});

  const {id} = useParams();

  useEffect(()=>{
    const fetchExercisesData = async ()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseDetail(exerciseDetailData);
      setExerciseVideos(exerciseVideoData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);
      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
    }
    fetchExercisesData();
  },[id])
  return (  
    <Box>
      <Container>
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
        {/* <SimilarExercises targetMuscleExercise={targetMuscleExercise} equipmentExercises={equipmentExercises}/> */}
      </Container>
    </Box>
  )
}

export default ExerciseDetail