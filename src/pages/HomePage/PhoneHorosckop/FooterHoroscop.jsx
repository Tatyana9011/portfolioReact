
import s from "./PhoneHorosckop.module.css";

import { useSelector, useDispatch } from 'react-redux';
import { showSignsForCouple } from "../../../redux/feature/homeSlise";

const FooterHoroscop =()=>{
    const dispatch = useDispatch()
    const renderSumisnisty = useSelector(state => state.home.renderSumisnisty)//сторінка сумісності
    const signsForCouple = useSelector(state => state.home.signsForCouple) //сторінка знаків для вибору пари
    const forecastForSign = useSelector(state=> state.home.forecastForSign)//сторінка гороскопу для знаку
  return(

    <div className= {s.resultFooter}> 
        <div className={`${s.footer} ${s.moon}`}>
             <img  src={`./images/${forecastForSign?'moon':'moonBlack'}.png`} alt="moon"/>
             <p className={`${s.pilcrow} ${s.footerText} ${forecastForSign?s.active:''}`}>Гороскоп</p>
        </div>
        <div onClick={()=>dispatch(showSignsForCouple())} className={`${s.footer} ${s.heart}`}>
             <img  src={`./images/${forecastForSign?'heartBlackColor':'heartOrange'}.png`} alt="heart"/>
             <p className={`${s.pilcrow} ${s.footerText} ${!forecastForSign?s.active:''}`}>Сумісність</p>
        </div>
    </div>

   )
}
export default FooterHoroscop;







