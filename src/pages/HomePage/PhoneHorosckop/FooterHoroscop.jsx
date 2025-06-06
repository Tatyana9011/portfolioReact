
import s from "./PhoneHorosckop.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { backToSignsForCouple } from "../../../redux/feature/homeSlise";
const FooterHoroscop =()=>{
    const navigate = useNavigate();
    const  location = useLocation();
    const hash = location.pathname.replace('/Home/', '');
    const forecast =(hash==='forecast');
    const dispatch = useDispatch();

    const handlOnClick = ()=>{
     dispatch(backToSignsForCouple());
     navigate('/Home/forecast');
    }

  return(
     <>
     <br/><div className={s.empti}></div>
    <div className= {s.resultFooter}> 
        <div  onClick={handlOnClick} className={`${s.footer} ${s.moon}`}>
             <img  src={`/images/${forecast?'moon':'moonBlack'}.png`} alt="moon"/>
             <p className={`${s.pilcrow} ${s.footerText} ${forecast?s.active:''}`}>Гороскоп</p>
        </div>
        <div onClick={()=> forecast?navigate('/Home/signsTwo'):undefined} className={`${s.footer} ${s.heart}`}>
             <img  src={`/images/${forecast?'heartBlackColor':'heartOrange'}.png`} alt="heart"/>
             <p className={`${s.pilcrow} ${s.footerText} ${!forecast?s.active:''}`}>Сумісність</p>
        </div>
    </div>
    </>

   )
}
export default FooterHoroscop;







