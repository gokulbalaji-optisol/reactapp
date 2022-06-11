import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Cards = (data) => {
  console.log("whsts this",data)
    return(
        <Card    sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  src={"http://localhost:3100/images/"+data.props.imgurl}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {/* <div>🌟{data.rating}</div> */}
                  {data.props.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      {data.props.genre.genre}
                    </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
    )
}
export default Cards;