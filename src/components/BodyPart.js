import React from 'react'
import {Stack, Typography} from "@mui/material";
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack 
      type="button"
      d='flex'
      justifyContent='center' 
      alignItems='center' 
      className="bodyPart-card" 
      onClick={()=> setBodyPart(item)}
      sx={{ 
        borderTop: bodyPart === item ? '4px solid #ff2625':'', 
        backgroundColor:'#fff', borderBottomLeftRadius: '20px', 
        width: '270px',
        height: '282px', 
        cursor: 'pointer', 
        gap: '47px'
      }}
    >
      <img src={Icon} alt="dumble" className='body-part-icon' style={{width:'40px',height:'40px'}} />
      <p>{item}</p>
    </Stack>
  )
}

export default BodyPart