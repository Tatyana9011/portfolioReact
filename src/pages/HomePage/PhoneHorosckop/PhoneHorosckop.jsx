import s from './PhoneHorosckop.module.css';
import imgTop from '../../../assets/images/top.png'
import { useSelector } from 'react-redux';
import StartHoroscopPage from './StartHoroscopPage'; //стартова стор з зірками #signs
import RenderSigns from './RenderSigns';//сторінка з усіма знаками зодіаку
import ForecastForSign from "./ForecastForSign";//сторінка гороскопу для вибраного знаку
import RenderSignsTwo from './RenderSignsTwo';//сторінка зодіаків для підбору пари
import { Routes, Route, Navigate } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CompatibilityCouple from './CompatibilityCouple';


const PhoneHorosckop = ()=>{

const location = useLocation();
const subPath = location.pathname.replace('/Home/', '');
const navigate = useNavigate();
const initialHorosckop = useSelector(state => state.home.initialHorosckop)

     // Перенаправляем на старт при перезагрузке
useEffect(() => {  //при перезагрузці сторінки(стейт затерається) ми повертаємо на першу сторінку
  if (location.pathname === '/' && !initialHorosckop) {
    navigate('/Home/startPage');
  }
}, [initialHorosckop, location.pathname, navigate]);


return(
    <div className={s.phone}>
    <div className={s.top}>
      <img src={imgTop} alt="top-phone"/></div>
    <div className={s.phone_content} >
       
        {(!initialHorosckop && (subPath === 'startPage' || subPath === '/' || subPath === ''))?<StartHoroscopPage/>:''}

    </div>
    <div className={s.content_signs}>

       <Routes>
        <Route path="signs" element={<RenderSigns/>} />
        <Route path="signsTwo" element={<RenderSignsTwo />} />
        <Route path="forecast" element={<ForecastForSign />} />
        <Route path="compatibility" element={<CompatibilityCouple />} />
      </Routes>

    </div>
</div>
)
}
 export default PhoneHorosckop;