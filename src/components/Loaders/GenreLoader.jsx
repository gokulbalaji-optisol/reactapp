import {Skeleton} from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea , Grid ,Item} from '@mui/material';
import { useEffect , useState } from 'react';
import GenreBookLayout from 'components/Layouts/GenreBooks/GenreBooklayout';

const GenreLoader = () =>{
    
    const loader = () =>{
        const limit =9;
        const cardsArr = [];
        for(var i=0;i<limit;i++){
            cardsArr.push(<div>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton variant="text" />
            </div>)
        }
        console.log(cardsArr.length)
        return cardsArr
    }


    return(
        <>
        <GenreBookLayout
        data = {loader()}
        >
                            <CardActionArea>
                                <Skeleton variant="rectangular" width={210} height={118} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <Skeleton variant="text" />
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <Skeleton variant="text" />
                                            <Skeleton variant="text" />
                                        </Typography>
                                    </CardContent>
                            </CardActionArea>
                  
            </GenreBookLayout>
        </>
    )
}
export default GenreLoader;