import {useState , useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import LoaderWrapper from 'hoc/LoaderWrapper/LoaderWrapper';
import GenreLoader from 'components/Loaders/GenreLoader';
import { fetchBookData, bookSelector } from 'redux/slices/book-slice';
import ReactPaginate from 'react-paginate';
import Cards from 'components/Layouts/Cards/Cards';

const Book = (props)  =>{    
    const dispatch = useDispatch();
    const {books , loading , hasErrors  , booksCount} = useSelector(bookSelector);

    const {setLoading} = props;

    const fetchGenreList =   async (page) =>{  
        let data = {
            page:page,
            limit:9
        }
        
        dispatch(fetchBookData(data))    
        }
        
    
    const handlePageClick = async(select) => {
        let data = {page:select.selected}
        fetchGenreList(data);
    }
    
    useEffect(()=>{
        console.log('render via initial');
        fetchGenreList(0)
    },[]);

    useEffect(()=>{
        console.log('render via loading' , );
    //    setLoading(loading)
    },[loading])
    
    
        return(
            <>
            { books.length > 0 ? 
                <div  className='row w-100 justify-content-center'>
                        <div className='card-deck ml-5 p-5'>
                        {books.map( (item , index) => {
                            return(
                                // <div key={index} className="col-4 mt-5  d-flex">
                            <div className="p-2 col-4 mt-5  d-flex">
                                <Cards props={item} /> 
                            </div>
                            )}
                            )}        
                        </div>
                    </div>
                :
                 <div> </div>
            }
                 
                             
                <ReactPaginate 
                    previousLabel={'prev'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(booksCount /9)}
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
            </>
        );
}

// export default LoaderWrapper(Book , "We're Fetching Data" , GenreLoader);
export default Book;