import {useState , useEffect } from 'react'

import {Link} from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import LoaderWrapper from 'hoc/LoaderWrapper/LoaderWrapper';
import GenreLoader from 'components/Loaders/GenreLoader';
import { fetchAllGenre } from 'services/GenreServices';

const Genres = props =>{
    const {setLoading} = props;
    const fetchGenreList =   async (page) =>{
        setLoading(true);  

            fetchAllGenre({page , limit:9})
            .then(d=>{
                console.log(d);
                setData(d.data[0])
                setTotalCount(d.data[1])
                setLoading(false);
            })
            .catch(e=>{
                console.log("err",e)
                setLoading(false);
            });
    }
    const [data , setData] = useState([]);
    const [totalCount,setTotalCount] = useState(0);
    const limit= 9;
    const handlePageClick = async(select) => {
        console.log(select.selected);
        fetchGenreList(select.selected);
    }
    
    useEffect(()=>{
        setLoading(false);
        fetchGenreList(0)
        console.log(data);
    },[]);
    
    
    if (data.length > 0){
        return(
            <div key={data.id}>
                <div className='row w-100 justify-content-center'>
                <div className='card-deck ml-5'>
                {data.map( (item , index) => 
                             <div key={index} className="col-4 mt-5  d-flex">
                                <div className ="card cards">
                                    <img className="card-img cardsimg" src= {item.imgurl} alt="Card image" />
                                    <Link to={"/genre/" + item.id} className="stretched-link"></Link>
                                    <div className="card-img-overlay">
                                        <p className='card-text'>{item.genre}</p>
                                        <div>{item.id}</div>
                                    </div>  
                                </div>
                             </div>               
                ) } 
                </div>
                </div>
                <ReactPaginate 
                    previousLabel={'prev'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(totalCount/limit)}
                    marginPagesDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination ml-5 justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                    />    
            </div>
        );
    }else{
        return(
            <> </>
            // <div>No Genre yet</div>
        )
    }
}

export default LoaderWrapper(Genres , "We're Fetching Data" , GenreLoader);
//export default Genre;