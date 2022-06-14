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
import TableRowComponent from './TableRowComponent';



const TableLayout = ({cols,data ,children}) => {

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
                        <TableRowComponent data={data} cols={cols}></TableRowComponent>
                    </TableBody>
                    {children}
                </Table>
                </TableContainer>
        </>
     );
}
 

export default TableLayout;