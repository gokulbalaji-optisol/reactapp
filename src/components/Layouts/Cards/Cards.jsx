import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Cards = (data) => {
  console.log(data.props)
    return(
        <Card    sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  src={data.props.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  <div>🌟{data.props.rating}</div>
                  {data.props.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      {data.props.genre}
                    </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
    )
}
export default Cards;