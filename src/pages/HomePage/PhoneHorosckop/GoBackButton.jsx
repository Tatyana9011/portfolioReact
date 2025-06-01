
import s from "./PhoneHorosckop.module.css";

import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { backToSignsForCouple } from "../../../redux/feature/homeSlise";

const GoBackButton =()=>{
const dispatch = useDispatch()
const navigate = useNavigate();
const  location = useLocation();
const hash = location.pathname.replace('/Home/', '');
const compatibility =(hash==='compatibility');

const handlOnClick = ()=>{
  dispatch(backToSignsForCouple())

  if(!compatibility){
    navigate('/Home/signs')
  }else{
    navigate('/Home/signsTwo')
  }
}
  return(
        <>
        <div onClick = {handlOnClick}className={s.goBack}>
            <img src="/images/Leading.png" alt=""/>
        </div>
        </>    )
}
export default GoBackButton;







