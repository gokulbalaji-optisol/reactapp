import { Button } from "@mui/material";
import TableLayout from "components/Table/TableLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bookSelector, fetchBookData } from "redux/slices/book-slice";
import { fetchGenreData, genreSelector } from "redux/slices/genre-slice";
import { bookColumns } from "./CONSTANTS";




const createData = (data) => {
    let obj = {
        id:data.id,
        title:data.title,
        genre:data.genre.genre,
        imgurl:data.imgurl,
        
    }
}

const AdminBook = () => {
    
    const dispatch = useDispatch();
    const {books , loading , hasErrors , bookCount} = useSelector(bookSelector);
    useEffect(()=>{
        dispatch(fetchBookData({}))    
    },[])
    useEffect(()=>{

    },[loading])
    return ( 
        <>
            <Button component={Link} to="/admin/addGenre" color="primary" variant="contained">
                Add Genre
            </Button>
            <TableLayout key="book" cols={bookColumns} data={books}/>
        </>
     );
}
 
export default AdminBook;