import TableLayout from "components/Table/TableLayout";
import AdminBook from "./AdminBook";
import AdminGenre from "./AdminGenre";

const AdminDashBoard = () => {
    const genreCols = [
        {field:"id" , header:"#"  , type:"text"},
        {field:"title" , header:"Name", type:"text"},
        {field:"image" , header:"Image", type:"image"},
        {field:"genre",header:"Genre", type:"text"},
        {field:"price" , header:"Price", type:"text"},
        {field:"company" , header:"Publication", type:"text"}
    ];
    const genreData = [ 
        {
            id:1,
            title:"Book1",
            genre:"Novel",
            price:20,
            image:"https://wallpapercave.com/wp/wp1951603.jpg",
            company:"Tinkle Publication" 
        },
        {
            id:1,
            title:"Book1",
            genre:"Novel",
            price:20,
            image:"https://wallpapercave.com/wp/wp1951603.jpg",
            company:"Tinkle Publication" 
        }
    ];
    return ( 
        <>
            {/* <TableLayout cols={genreCols} data={genreData} />  */}
            <AdminGenre /> 
            <AdminBook />
        </>
     );
}
 
export default AdminDashBoard;