//genre
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

export const SellerGenreData = { genreColumns, genreOptionData };

//Books
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
    link: "/seller/edit/",
    buttonCSS: "fa-solid fa-pen",
    color: "primary",
  },
  {
    link: "/seller/delete/",
    buttonCSS: "fa-solid fa-trash",
    color: "error",
  },
];

export const SellerBookData = { bookColumns, bookOptionData };

//Orders
export const orderColumns = [
  { field: "id", header: "ID", type: "text" },
  { field: "total", header: "Title", type: "text" },
  { field: "delivery_number", header: "Price", type: "text" },
  { header: "Action" },
];

export const orderOptionData = [
  {
    link: "/seller/delete/",
    buttonCSS: "fa-solid fa-trash",
    color: "error",
  },
];

export const SellerOrderData = { orderColumns, orderOptionData };
