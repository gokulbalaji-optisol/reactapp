import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
const AdminSideBar = () => {
  const data = [
    { text: "Dashboard", link: "/seller/dashboard" },
    { text: "Genres", link: "/seller/genres" },
    { text: "Books", link: "/seller/books" },
    { text: "Orders", link: "/seller/orders" },
    { text: "AddBook", link: "/addBook" },
    { text: "AddGenre", link: "/addGenre" },
  ];
  return (
    <>
      <div>
        <Typography>Seller Panel</Typography>
        <Divider />
        <List>
          {data.map((obj, index) => (
            <ListItem
              key={obj.text + index}
              button
              component={Link}
              to={obj.link}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText primary={obj.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};

export default AdminSideBar;
