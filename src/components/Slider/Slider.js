import React from 'react';
import {connect} from 'react-redux';
import { toggleDarkMode } from '../../redux/DarkMode/DarkMode-actions';
import './Slider.css';
const Slider = ({darkMode,toggleDarkMode})=>{
    const onSliderClick = ()=>{
        toggleDarkMode(darkMode)
    }
    return(
        <label className="switch" >
        <input type="checkbox" onClick = {onSliderClick}/>
        <span className="slider round"></span>
        </label>
    )
}

const mapStateToProps = (state)=>({
    darkMode : state.darkMode.dark
})

const mapDispatchToProps = (dispatch)=>({
    toggleDarkMode : isDarkMode => dispatch(toggleDarkMode(isDarkMode))
})

export default connect(mapStateToProps,mapDispatchToProps)(Slider);