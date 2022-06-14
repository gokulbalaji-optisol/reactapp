import { TableCell, TableRow } from "@mui/material";

const TableRowComponent = ({data , cols , isSubField}) => {
    return ( 
        <>
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
        </>
     );
}
 
export default TableRowComponent;