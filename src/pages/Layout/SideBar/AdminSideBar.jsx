import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const AdminSideBar = () => {
    const data = [
        {text:"Dashboard" , link:"/dashboard"},
        {text:"Genres" , link:"/genres"},
        {text:"Books" , link:"/books"},
        {text:"Users" , link:"/users"},
        {text:"Orders" , link:"/orders"},
    ]
    return ( 
        <>
        <div>       
            <Typography>
                Admin Panel
            </Typography>
            <Divider />
            <List>
            {data.map((obj, index) => (
                <ListItem key={obj.text+index} button component={Link} to={obj.link} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    </ListItemIcon>
                    <ListItemText primary={obj.text} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
        
        
        
                <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <Link to="#">
                        Admin Panel
                    </Link>
                    
                </li>
                <li>
                    <Link to="manage">Dashboard</Link>
                </li>
                <li>
                    <Link to="users">Users</Link>
                </li>
                <li>
                    <Link to="books">Books</Link>
                </li>
                <li>
                    <Link to="genres">Genres</Link>
                </li>
                <li>
                    <Link to="orders">Orders</Link>
                </li>
                
            </ul>
            </div>
        </>
     );
}
 
export default AdminSideBar;