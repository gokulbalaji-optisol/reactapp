import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({data , children}) {
  const {image , content } = data;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={image.height}
          image={image.url}
          alt={image.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {content.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
