import React from 'react'
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({exerciseDetail}) => {
  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
  const extraDetail = [
    {
      icon:BodyPartImage,
      name:bodyPart
    },
    {
      icon:TargetImage,
      name:target
    },
    {
      icon:EquipmentImage,
      name:equipment
    }
  ]
  return (
    <Stack gap="30px" sx={{ flexDirection:{lg:"row"}, justifyContent:'space-between', alignItems:"center", p:'20px'}}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-img"  />
      <Stack sx={{ gap: { lg:'35px', xs:'20px' }, p:'20px', maxWidth:'50%'}}>
        <Typography variant="h3" textTransform="capitalize">{name}</Typography>
        <Typography>
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        {
          extraDetail.map((item)=>(
            <Stack key={item.name} direction='row' gap='20px' alignItems='center'>
              <Button sx={{background:"#fff2db", borderRadius:'50%', width:'80px', height:'80px'}}>
                <img sx={{width:'50px',height:'50px'}}src={item.icon} />
              </Button>
              <Typography textTransform="capitalize">{item.name}</Typography>
            </Stack>
          ))
        }
      </Stack>
    </Stack>
  )
}

export default Detail