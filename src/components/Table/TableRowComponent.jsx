import { Button, TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";

const TableRowComponent = ({data , cols ,  link , ...rest}) => {
    return ( 
        <>
            {data.map((item,index) => (
                            <TableRow>
                                {cols.map((col,index)=> {
                                 return (
                                    
                                    <>
                                        {col.type === "image" ?
                                            <TableCell>
                                            <img alt="image12" height={34} width={34} src={ col.prefix ?
                                                "http://localhost:3100/images/"+item[col.field] 
                                                :
                                                item[col.field] } />
                                            </TableCell> 
                                            :
                                            //item[col.field] ||  
                                            <>
                                            {col.field && 
                                            <TableCell>
                                                {(col.field).split('.').reduce((o,i)=>o[i], item)  }
                                            </TableCell>}
                                            </>
                                        }
                                    </>
                                    
                                    
                                    
                                )})}
                                <TableCell>
                                    
                                        <Button size="large" component={Link} to={link+"edit/"+item.id} color="primary" variant="contained">
                                            <i class="fa-solid fa-pen"></i>
                                        </Button>
                                        <Button size="large" component={Link} to= {link+"delete/"+item.id} color="error" variant="contained">
                                            <i class="fa-solid fa-trash"></i>
                                        </Button>
                                    
                                    </TableCell>
                            </TableRow>    
                        )
                    )}
        </>
     );
}
 
export default TableRowComponent;