import s from './PhoneHorosckop.module.css';
import imgTop from '../../../assets/images/top.png'
import StartHoroscopPage from './StartHoroscopPage';



const PhoneHorosckop = ()=>{
return(
    <div className={s.phone}>
    <div className={s.top}><img src={imgTop} alt="top-phone"/></div>
    <div className={s.phone_content} >
         <StartHoroscopPage/>
    </div>
    <div className={s.content_signs}></div>
</div>
)
}
 export default PhoneHorosckop;