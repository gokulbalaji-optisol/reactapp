import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const BookLayout = (data) => {
    const cards = (item) => {
        return(
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height={item.image.height}
                    image={item.image.url}
                    alt={item.image.alt}
                    />
                    {item.card_body &&
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            
                        </Typography>
                    </CardContent>
                    }
                </CardActionArea>
            </Card>
        )
    }
    return(
        <>
        <div className='row w-100 justify-content-center'>
            <div className='card-deck ml-5 '>
            {data.map((item , index)=>{
                return(
                    <>
                        <div className='col-4 mt-5  d-flex'>
                            <div className ="card shadow ">
                                {cards(item)}                               
                            </div>
                        </div>
                    </>
                )
            })}
            </div>
        </div>
        </>
    )
}
export default BookLayout;