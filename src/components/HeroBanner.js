import React from 'react'
import {Box, Stack, Typography, Button, Container} from "@mui/material";
// import img 
import HeroBannerImg from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Container>
      <Box sx={{
          // mt:{lg:'50px', xs:'40px'},
          // ml:{sm:'50px'}
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"flex-start",
          paddingTop:{lg:"60px", xs:"30px"},
        }}
        position="relative"
        p='20px'
        pl="40px"
      >
        <Typography fontWeight="600" color="#FF2625" fontSize="24px">
          Exercise
        </Typography>
        <Typography fontWeight="700" sx={{fontSize:{lg:'44px', xs:'40px'}}} mb="23px" mt="30px">
          Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={2}>
          Check out the most effective exercises
        </Typography>
        <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor:"#FF3634"}} p="10px" >
          Explore Exercise
        </Button>
        <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px', transform:'translateY(-90px)', zIndex:'-1', pointerEvents:"none" }}>
          Exercise
        </Typography> 
        <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
      </Box>
    </Container>
  )
}

export default HeroBanner