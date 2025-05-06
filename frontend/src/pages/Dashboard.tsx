import React from 'react';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const activityData = {
    labels: ['Running', 'Cycling', 'Swimming'],
    datasets: [{
      data: [30, 25, 45],
      backgroundColor: ['#2196f3', '#4caf50', '#f50057'],
    }],
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Activity Overview
            </Typography>
            <Doughnut data={activityData} />
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Recent Activities
            </Typography>
            {/* Recent activities list will be implemented here */}
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" startIcon={<AddIcon />}
          onClick={() => window.location.href = '/activities/new'}>
          Add New Activity
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
