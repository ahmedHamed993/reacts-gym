import React from 'react'
import {Box, Stack, Typography} from "@mui/material";
import Logo from "../assets/images/Logo-1.png";
const Footer = () => {
  return (
    <Box sx={{mt:'60px', background:"#fff3f4"}}>
      <Stack gap="40px" alignItems="center" px="40px" py='24px'>
        <img src={Logo} alt='logo' width='200px' height='40px' />
      </Stack>
    </Box>
  )
}

export default Footer