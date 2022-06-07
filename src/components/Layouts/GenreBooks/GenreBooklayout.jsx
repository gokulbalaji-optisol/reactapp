import { Grid, Paper, Card} from '@mui/material';
import {makeStyles} from '@mui/material'

const GenreBookLayout = ({data , children}) => {

    return (
        <div >
                        
                        <Grid
                            container
                            spacing={2}
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                            >
                            { data.map( (item , index) => {
                                return(<Grid item xs={4}>
                                    <Card className='bg-dark'>
                                        {/* {children} */}
                                        <div>hello {index}</div>
                                    </Card>
                                </Grid>)
                                })
                            }             
                        </Grid>
        </div>
    )
}
export default GenreBookLayout;