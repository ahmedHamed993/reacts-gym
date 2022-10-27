import React, {useContext} from 'react'
import {Box, Button,Container} from "@mui/material";
import BodyPart from './BodyPart';
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from './CarouselArrows';
import ExerciseCard from "./ExerciseCard";
const HorizontalScrollBar = ({data, setBodyPart, bodyPart, isBodyParts}) => {

  var settings = {
    dots: false,
    arrows:true,
    infinite: false,
    autoplay:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Container>
        <Slider className="slider" {...settings} sx={{display:'flex', overflow:'hidden', position:"relative"}}>
            {
              data.map(item => (
                <Box key={item.id || item} itemID={item.id || item} title={item.id} m="0 40px" >
                  <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/> 
                </Box>)
                )
            }
        </Slider>
    </Container>
  )
}

export default HorizontalScrollBar;
