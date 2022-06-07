import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = ({reqData,APIcall}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
      setLoading(true)
      setData(null);
      setError(null);
      APIcall({})     
      .then(res => {
          setLoading(false);
          res.data.content && setData(res.data.content);
          res.content && setData(res.content);
      })
      .catch(err => {
          setLoading(false)
          setError('An error occurred. Awkward..')
      })
      
  }, [url])

  return { data, loading, error }
}
export default useFetch;