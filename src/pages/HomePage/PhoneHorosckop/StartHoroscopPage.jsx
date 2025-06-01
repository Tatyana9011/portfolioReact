import s from './PhoneHorosckop.module.css';
import backGoroscop from '../../../assets/images/goroscopAnimat/Horoscope.png';
import star1 from '../../../assets/images/goroscopAnimat/stars1.png';
import star2 from '../../../assets/images/goroscopAnimat/stars2.png';
import star3 from '../../../assets/images/goroscopAnimat/stars3.png';
import star4 from '../../../assets/images/goroscopAnimat/stars4.png';
import animateGoroscop from './animateGoroscop';
import { useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import {renderSignHorosckop} from '../../../redux/feature/homeSlise';
import { useLocation, useNavigate } from "react-router-dom";


const StartHoroscopPage = ()=>{
    const dispatch = useDispatch()
    const blockRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

useEffect(() => {
  // Если hash пустой — можно задать начальный
  if (!location.hash) {
    navigate('/Home/startPage'); // задать дефолтный hash
  }
}, [location.hash, navigate]);

  useEffect(() => {
    animateGoroscop(blockRef.current);
 }, []);


 const handelClick=()=>{
   navigate('/Home/signs')
   dispatch(renderSignHorosckop())
  }
    return (
        <>
            <div ref={blockRef} className={s.image_goroscope}>
                <div  className={s.photo_goroscop_stars}>
			        <div className={`${s.phone_image_goroscop__star} phone_image_goroscop__star`} style={{background: `url(${star1})`}}></div>
	                <div  className={`${s.phone_image_goroscop__star} phone_image_goroscop__star`} style={{background: `url(${star2})`}}></div>
	                <div  className={`${s.phone_image_goroscop__star} phone_image_goroscop__star`} style={{background: `url(${star3})`}}></div>
	                <div  className={`${s.phone_image_goroscop__star} phone_image_goroscop__star`} style={{background: `url(${star4})`}}></div>
                </div>
                <div className={s.phone_image_goroscop__back} style={{background: `url(${backGoroscop})`}}></div>
                <div   className={`${s.phone_image_goroscop__cloud} pulse`}
                 style={{background: `url(${require(`../../../assets/images/goroscopAnimat/cloud1.png`)})`}}></div>
                <div  className={`${s.phone_image_goroscop__cloud} pulse`}
                 style={{background: `url(${require(`../../../assets/images/goroscopAnimat/cloud2.png`)})`}}></div>
            </div>
            <div  className={s.title} onClick={handelClick}>
                <p>Зодіакальний бандерогусь</p>
            </div>

</>
    )
}

export default StartHoroscopPage;