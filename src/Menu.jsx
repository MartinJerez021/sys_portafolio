import React from 'react';
import { Box, CssBaseline, Typography, Container   } from '@mui/material';

export default function Menu() {
  return (
    <>
    <CssBaseline/>
     <Box
      sx={{
        width: "20vw", // 1/5 de la pantalla
        height: "100vh", // toda la altura de la pantalla
        bgcolor: "primary.main", // color del theme (igual que AppBar)
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6" sx={{ writingMode: "horizontal-tb" }}>
        PORTAFOLIO DE MARTÍN JEREZ
      </Typography>
    </Box>
    </>
  )
};
