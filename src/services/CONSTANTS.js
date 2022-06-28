//METHODS

export const POST = "post";
export const GET = "get";
//Signup
export const USER_SIGNUP = "/signup";
export const SELLER_SIGNUP = "/seller/signup";

//Login
export const LOGIN = "/login";

//Genre
export const FETCH_ALL_GENRE = "/genre/getGenres";

//Book
export const FETCH_ALL_BOOK = "/book/getAllBook";

//Banner
export const FETCH_BANNER_BY_ID = "/banner/get/";
export const FETCH_ALL_BANNER = "/banner/getAllBanner";
export const ADD_BANNER = "/banner/add";
export const EDIT_BANNER = "/banner/edit";
//Order
export const FETCH_ALL_ORDER = "/order/getAllOrder";

//Admin
export const ADMIN_FETCH_ORDER = "/admin/getOrders";
export const ADMIN_FETCH_USER = "/admin/getUsers";

//Seller
export const SELLER_FETCH_BOOK = "/seller/getBooks";
export const SELLER_FETCH_ORDER = "/seller/getOrders";

//cart
export const FETCH_ALL_CART = "/cart/getAll";
export const ADD_CART_ITEM = "/cart/add";
export const DELETE_CART_ITEM = "/cart/delete";
export const INC_CART_ITEM = "/cart/updateinc";
export const DEC_CART_ITEM = "/cart/updatedec";
