import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { TableFooter, TablePagination } from '@mui/material';



const TableLayout = ({cols,data}) => {

    return ( 
        <>
             <TableContainer component={Paper}>
                <Table >
                    <TableHead>
                    <TableRow>
                        {cols.map((item , index)=>{
                            return(
                                <TableCell> {item.header}</TableCell>
                            )
                        })}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((item,index) => (
                            <TableRow>
                                {cols.map((col,index)=>(
                                    <TableCell>
                                        {col.type === "image" ?
                                            <img alt="image12" height={34} width={34} src={ col.prefix ?
                                                "http://localhost:3100/images/"+item[col.field] 
                                                :
                                                item[col.field] } /> 
                                            :
                                            //item[col.field] ||  
                                            (col.field).split('.').reduce((o,i)=>o[i], item) }
                                    </TableCell>
                                ))}
                            </TableRow>    
                        )
                    )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10]}
                                colSpan={3}
                                count={50}
                                rowsPerPage={5}
                                page={0}
                                SelectProps={{
                                    inputProps: {
                                    'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                //onPageChange={handleChangePage}
                                //onRowsPerPageChange={handleChangeRowsPerPage}
                                //ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
                </TableContainer>
        </>
     );
}
 

export default TableLayout;