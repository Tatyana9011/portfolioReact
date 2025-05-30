import s from './PhoneHorosckop.module.css';
import imgTop from '../../../assets/images/top.png'
import StartHoroscopPage from './StartHoroscopPage';
import { useSelector } from 'react-redux';
import RenderSigns from './RenderSigns';
import ForecastForSign from "./ForecastForSign";
import RenderSignsTwo from './RenderSignsTwo';
const PhoneHorosckop = ()=>{
    const initialHorosckop = useSelector(state => state.home.initialHorosckop)
    const showForecastForSign = useSelector(state => state.home.forecastForSign)
    const signsForCouple = useSelector(state => state.home.signsForCouple)
return(
    <div className={s.phone}>
    <div className={s.top}><img src={imgTop} alt="top-phone"/></div>
    <div className={s.phone_content} >
        {!initialHorosckop?<StartHoroscopPage/>:''}
    </div>
    <div className={s.content_signs}>
        {
        signsForCouple?<RenderSignsTwo/>:showForecastForSign&&initialHorosckop?
        <ForecastForSign/>:initialHorosckop?<RenderSigns/>:''
        }
    </div>
</div>
)
}
 export default PhoneHorosckop;