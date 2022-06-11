import TableLayout from "components/Table/TableLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sagaActions from "redux/sagaActions";
import { fetchGenreData, genreSelector } from "redux/slices/genre-slice";
import { genreColumns } from "./CONSTANTS";

const AdminGenre = () => {
    
    const dispatch = useDispatch();
    const {genres , loading , hasErrors , genreCount} = useSelector(genreSelector);
    useEffect(()=>{
        let action = {}
         dispatch({type:sagaActions.FETCH_GENRE ,  action })
    },[])
    useEffect(()=>{

    },[loading])
    return ( 
        <>
            <TableLayout cols={genreColumns} data={genres}/>
        </>
     );
}
 
export default AdminGenre;