import {useState , useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import LoaderWrapper from 'hoc/LoaderWrapper/LoaderWrapper';
import GenreLoader from 'components/Loaders/GenreLoader';
import { fetchGenreData, genreSelector } from 'redux/slices/genre-slice';

const Genre = props =>{
    
    const dispatch = useDispatch();
    const {genres , loading , hasErrors , genreCount} = useSelector(genreSelector);
    const {setLoading} = props;
    const limit= 9;

    const fetchGenreList =   async (page) =>{  
        dispatch(fetchGenreData({page , limit:9}))
        }
        
    
    const handlePageClick = async(select) => {
        fetchGenreList(select.selected);
    }
    
    useEffect(()=>{
        console.log('render via initial');
        fetchGenreList(0)
    },[]);

    useEffect(()=>{
        console.log('render via loading');
        setLoading(loading)
    },[loading])
    
    
    if (genres.length > 0){
        return(
            <div >
                <div className='row w-100 justify-content-center'>
                <div className='card-deck ml-5'>
                {genres.map( (item , index) => {return(
                    <div key={index} className="col-4 mt-5  d-flex">
                    <div className ="card cards">
                        <img className="card-img cardsimg" src= {"http://localhost:3100/images/"+item.imgurl} alt="Card image" />
                        <Link to={"/genre/" + item.id} className="stretched-link"></Link>
                        <div className="card-img-overlay">
                            <p className='card-text'>{item.genre}</p>
                            <div>{item.id}</div>
                        </div>  
                    </div>
                 </div>
                )}
                                            
                ) } 
                </div>
                </div>
                <ReactPaginate 
                    previousLabel={'prev'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(genreCount /limit)}
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

export default LoaderWrapper(Genre , "We're Fetching Data" , GenreLoader);
//export default Genre;