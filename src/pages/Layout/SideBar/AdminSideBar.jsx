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
    { text: "Dashboard", link: "/dashboard" },
    { text: "Genres", link: "/admin/genres" },
    { text: "Books", link: "/admin/books" },
    { text: "Users", link: "/admin/users" },
    { text: "Orders", link: "/admin/orders" },
    { text: "Banners", link: "/admin/Banners" },
    { text: "Coupons", link: "/admin/coupon" },
  ];
  return (
    <>
      <div>
        <Typography>Admin Panel</Typography>
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
