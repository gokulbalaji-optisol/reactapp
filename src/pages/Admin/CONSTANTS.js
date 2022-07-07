///genre
export const genreColumns = [
  { field: "id", header: "ID", type: "text" },
  { field: "genre", header: "Title", type: "text" },
  { field: "imgurl", header: "Image", type: "image", prefix: true },
  { header: "Action" },
];

export const genreOptionData = [
  {
    link: "/genre/edit/",
    buttonCSS: "fa-solid fa-pen",
    color: "primary",
  },
  {
    link: "/genre/delete/",
    buttonCSS: "fa-solid fa-trash",
    color: "error",
  },
];
export const AdminGenreData = { genreColumns, genreOptionData };

//book
export const bookColumns = [
  { field: "id", header: "ID", type: "text" },
  { field: "title", header: "Title", type: "text" },
  { field: "price", header: "Price", type: "text" },
  { field: "desc", header: "Description", type: "text" },
  { field: "genre.genre", header: "Genre", type: "text" },
  { field: "imgurl", header: "Image", type: "image", prefix: true },
  { header: "Action" },
];

export const bookOptionData = [
  {
    link: "/book/edit/",
    buttonCSS: "fa-solid fa-pen",
    color: "primary",
  },
  {
    link: "/book/delete/",
    buttonCSS: "fa-solid fa-trash",
    color: "error",
  },
];
export const AdminBookData = { bookColumns, bookOptionData };

//banner
export const bannerColumns = [
  { field: "id", header: "ID", type: "text" },
  { field: "sequence", header: "sequence", type: "text" },
  { field: "img", header: "Image", type: "image", prefix: true },
  { header: "Action" },
];

export const bannerOptionData = [
  {
    link: "/banner/edit/",
    buttonCSS: "fa-solid fa-pen",
    color: "primary",
  },
  {
    link: "/banner/delete/",
    buttonCSS: "fa-solid fa-trash",
    color: "error",
  },
];
export const AdminBannerData = { bannerColumns, bannerOptionData };

//orders

export const orderColumns = [
  { field: "id", header: "ID", type: "text" },
  { field: "total", header: "Title", type: "text" },
  { field: "delivery_number", header: "Price", type: "text" },
  { header: "Action" },
];
export const orderOptionData = [
  {
    link: "/order/edit/",
    buttonCSS: "fa-solid fa-pen",
    color: "primary",
  },
  {
    link: "/order/delete/",
    buttonCSS: "fa-solid fa-trash",
    color: "error",
  },
];
export const AdminOrderData = { orderColumns, orderOptionData };

//users
export const userColumns = [
  { field: "id", header: "ID", type: "text" },
  { field: "username", header: "Username", type: "text" },
  { field: "email", header: "Email", type: "text" },
  { field: "mobile", header: "Mobile", type: "text" },
  { header: "Action" },
];

export const userOptionData = [
  {
    link: "/admin/edit/",
    buttonCSS: "fa-solid fa-pen",
    color: "primary",
  },
  {
    link: "/admin/delete/",
    buttonCSS: "fa-solid fa-trash",
    color: "error",
  },
];

export const AdminUserData = { userColumns, userOptionData };
