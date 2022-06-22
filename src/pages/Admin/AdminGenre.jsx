import { Button, TableFooter, TablePagination, TableRow } from "@mui/material";
import TableLayout from "components/Table/TableLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import sagaActions from "redux/sagaActions";
import { fetchGenreData, genreSelector } from "redux/slices/genre-slice";
import { AdminGenreData } from "./CONSTANTS";

const AdminGenre = () => {
    
    const dispatch = useDispatch();
    const {genres , loading , hasErrors , genreCount} = useSelector(genreSelector);
    const [page,setPage] = useState(0);
    const [limit,setLimit] = useState(5);

    const genreColumns = AdminGenreData.genreColumns;
    const optionData = AdminGenreData.genreOptionData;

    const handleChangePage = (event , newPage) => {
        console.log(event , newPage)
        setPage(newPage);
    }
    const handleChangeRowsPerPage=(event)=>{
        console.log(event.target.value,parseInt(event.target.value, 10));
        setLimit(event.target.value)
        setPage(0);
    }

    useEffect(()=>{
        let action = {page:page , limit:limit}
        dispatch({type: sagaActions.FETCH_GENRE , action})    
    },[])
    useEffect(()=>{

    },[loading])
    useEffect(()=>{
        let action = {page:page , limit:limit}
        dispatch({type: sagaActions.FETCH_GENRE , action})    
    },[page,limit])
    return ( 
        <>
            <Button component={Link} to="/admin/addGenre" color="primary" variant="contained">
                Add Genre
            </Button>
            <TableLayout cols={genreColumns} data={genres} options optionData={optionData} >
                    <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10]}
                                    colSpan={3}
                                    count={genreCount}
                                    rowsPerPage={limit}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    // ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                
            </TableLayout>

        </>
     );
}
 
export default AdminGenre;