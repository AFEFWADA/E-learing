import React from 'react';
import { Box, Grid ,Typography } from '@mui/material'; 
import StatBox from './StatBox';

function FeaturedTest() { 
  return (  
    <Box m="20px">
      {/* HEADER */}
     <Box mb="30px">
        <Typography
        variant="h4"
        color={'#D7D4D4'}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
        >
              Dashboard
        </Typography>
        <Typography variant="h6" color={'#868dfb'}>
              Welcome to your dashboard
        </Typography>
    </Box>


      {/* GRID & CHARTS */}
      <Grid container spacing={3} mt="20px">
        {/* ROW 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
                backgroundColor: '#343a40',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                
                height: '100px',
                width: '200px',
                p: 0,
                m: 0
              }}
          >
            <StatBox
              certificate="php"
              date="12-02-2019"
            
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            backgroundColor={'#343a40'}
            display="flex"
            alignItems="center"
            justifyContent="flex-start" 
            height="100%"
            p="0"
            m="0"
          >
            <StatBox
              certificate="java"
              date="12-02-2019"
            
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            backgroundColor={'#343a40'}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"  
            height="100%"
            p="0"
            m="0"
          >
            <StatBox
              certificate="machine learning"
              date="12-02-2019"
            
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            backgroundColor={'#343a40'}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"  
            height="100%"
            p="0"
            m="0"
          >
            <StatBox
              certificate="reseau"
              date="12-02-2019"
             
            />
          </Box>
        </Grid>
      </Grid>

            {/* Lien CHARTS */}

    </Box>
  );
} 

export default FeaturedTest;
