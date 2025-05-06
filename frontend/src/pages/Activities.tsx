import React, { useState } from 'react';
import { Box, Paper, Typography, Button, TextField, Grid, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

interface Activity {
  id: string;
  type: string;
  distance: number;
  duration: number;
  date: string;
}

const Activities = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [newActivity, setNewActivity] = useState({
    type: '',
    distance: 0,
    duration: 0,
    date: new Date().toISOString().split('T')[0],
  });

  const handleAddActivity = () => {
    const newId = Date.now().toString();
    const newActivityData = {
      id: newId,
      ...newActivity,
    };
    setActivities([...activities, newActivityData]);
    setNewActivity({
      type: '',
      distance: 0,
      duration: 0,
      date: new Date().toISOString().split('T')[0],
    });
  };

  const handleDeleteActivity = (id: string) => {
    setActivities(activities.filter(activity => activity.id !== id));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Activities
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Add New Activity
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Activity Type</InputLabel>
              <Select
                value={newActivity.type}
                onChange={(e) => setNewActivity({ ...newActivity, type: e.target.value })}
              >
                <MenuItem value="running">Running</MenuItem>
                <MenuItem value="cycling">Cycling</MenuItem>
                <MenuItem value="swimming">Swimming</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Distance (km)"
              type="number"
              value={newActivity.distance}
              onChange={(e) => setNewActivity({ ...newActivity, distance: parseFloat(e.target.value) })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Duration (min)"
              type="number"
              value={newActivity.duration}
              onChange={(e) => setNewActivity({ ...newActivity, duration: parseFloat(e.target.value) })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date"
              type="date"
              value={newActivity.date}
              onChange={(e) => setNewActivity({ ...newActivity, date: e.target.value })}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={handleAddActivity}
            >
              Add Activity
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Activity History
        </Typography>
        <Box sx={{ mt: 2 }}>
          {activities.map((activity) => (
            <Paper key={activity.id} sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography>{activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {activity.date}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2">
                  {activity.distance} km, {activity.duration} min
                </Typography>
              </Box>
              <IconButton onClick={() => handleDeleteActivity(activity.id)}>
                <DeleteIcon />
              </IconButton>
            </Paper>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default Activities;
