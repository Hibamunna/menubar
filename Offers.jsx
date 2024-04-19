import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 34}}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://www.gloriafood.com/wp-content/uploads/2018/09/unique-restaurant-promotion-ideas.png"

      />
      <CardContent>
       
      </CardContent>
    
    </Card>
  );
}