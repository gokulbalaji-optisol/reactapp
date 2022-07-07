import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CartButtonAddToCart from "pages/Cart/CartButtonAddToCart";
import CartButton from "pages/Cart/CartButton";
import { cartServices } from "services/CartServices";

const Cards = (data) => {
  console.log("whsts this", data);
  const addToCart = (id) => {
    console.log(id);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={"http://localhost:3100/images/" + data.props.imgurl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {/* <div>🌟{data.rating}</div> */}
            {data.props.title}
          </Typography>
          <Typography>&#8377; {data.props.price}</Typography>
          <Typography variant="body2" color="text.secondary">
            {data.props.genre.genre}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <CartButton
            id={data.props.id}
            color="success"
            buttonCSS="fas fa-shopping-cart"
            apicall={cartServices.addCartItem}
          />
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
export default Cards;
