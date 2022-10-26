import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, Container } from "@mui/material";

// import assets 
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Container>
      <Stack 
        direction="row" 
        justifyContent='space-around' 
        alignItems="center" 
        sx={{ 
          gap:{ sm:'122px', xs:'40px'}, 
          marginTop:{sm:'32px',xs:'20px'},
          justifyContent:"none",
          height:"10vh",
        }}
        px="20px"
      >
          <Link to="/">
            <img src={Logo} style={{ margin:"0 20px", width:'48px', height:'48px'}}
            />
          </Link>
          <Stack direction="row" gap="40px" fontSize="20px" alignItems="flex-end">
            <Link to="/" style={{textDecoration:'none', color:'#3A1212', borderBottom:'3px solid #FF2625'}}>Home</Link>
            <a href="#exercises" style={{textDecoration:'none', color:'#3A1212'}}>Exercises</a>
          </Stack>
      </Stack>
    </Container>
  )
}

export default Navbar