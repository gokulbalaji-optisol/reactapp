export const bookObj = async() =>{
    let arrObj = []
    let genreArr = ["Novel" , "Horror" , "Fantasy"]
    for(var i=0;i<20;i++){
        arrObj.push(
            {
                id:i+1,
                image:"https://wallpapercave.com/wp/wp1951603.jpg",
                title:"Book"+(i+1),
                rating:Math.floor(Math.random()*5)+1,
                genre: genreArr[Math.floor(Math.random()*genreArr.length)],
                price:40,
                wishlist:false
            }
        )
    }
    let data = [arrObj,arrObj.length] 
    return ({data});
} 