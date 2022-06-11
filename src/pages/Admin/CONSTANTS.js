export const genreColumns = [
    { field:"id" , header:"ID" , type:"text" },
    { field:"genre" , header:"Title" , type:"text"},
    {field:"imgurl" , header:"Image" , type:"image" , prefix:true}
];

export const bookColumns = [
    { field:"id" , header:"ID" , type:"text" },
    { field:"title" , header:"Title" , type:"text"},
    { field:"price" , header:"Price" , type:"text"},
    { field:"desc" , header:"Description" , type:"text"},
    { field:"genre.genre" , header:"Genre" , type:"text"},
    {field:"imgurl" , header:"Image" , type:"image" , prefix:true}
];

