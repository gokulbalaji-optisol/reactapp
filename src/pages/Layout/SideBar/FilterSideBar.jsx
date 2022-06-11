import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, FormLabel, Radio, RadioGroup, Rating, Slider, Typography } from '@mui/material';
import { useState } from 'react';
import FormLayout from 'components/Form/Layout/FormLayout';
import { SubmitButton } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenreData, genreSelector } from 'redux/slices/genre-slice';
import { Field, useFormikContext } from 'formik';
import CheckBoxField from './FilterFields/CheckBoxField';
import * as Yup from 'yup';
import SliderField from './FilterFields/SliderField';
import RadioBoxField from './FilterFields/RadioBoxField';
import { fetchBookData, bookSelector } from 'redux/slices/book-slice';
import {useEffect} from 'react'
const FilterSideBar = () => {
    const [sliderValue, setSliderValue] = useState([20, 37]);
    const dispatch = useDispatch();
    const {genres , loading , hasErrors , genreCount} = useSelector(genreSelector);

  const handleChangeSlider = (event, newValue) => {
    setSliderValue(newValue);
  };
const INITIAL_STATE = {
    genre:[],
    range:[10,30],
    rating:0 
}

const FORM_VALIDATION = Yup.object().shape({
    
})
const apicall = (obj) => {
    console.log(obj);
    obj.data = {...obj.data , page:0 , limit:9}
    dispatch(fetchBookData(obj.data))
}

useEffect(()=>{
    // if(genres.length<0){
        dispatch(fetchGenreData(0))
    //}
},[])

    return (  
        <div className='p-5'>
        <FormLayout
        apicall={apicall}
        INITITAL_FORM_STATE={INITIAL_STATE}
        FORM_VALIDATION={FORM_VALIDATION}
        >
            <CheckBoxField name="genre"  data={genres}/>
            <RadioBoxField name="rating" />
            <SliderField name="range"/>
            
            <SubmitButton>apply</SubmitButton>
        </FormLayout>    
        </div>
    );
}

export default FilterSideBar;