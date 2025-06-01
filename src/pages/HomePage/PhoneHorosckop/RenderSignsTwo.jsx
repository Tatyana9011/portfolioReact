
import s from "./PhoneHorosckop.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { showSumisnistyForCouple } from "../../../redux/feature/homeSlise";
import RenderSignsGroup from "./RenderSignsGroup";
import GoBackButton from "./GoBackButton";
import FooterHoroscop from "./FooterHoroscop";
import { useLocation, useNavigate } from "react-router-dom";

const RenderSignsTwo =()=>{
    const dispatch = useDispatch()
    const signActive = useSelector(state => state.home.firstSign)
    const coupleActive = useSelector(state => state.home.twoSign)
    const navigate = useNavigate();
    const  location = useLocation();
    const hash = location.pathname.replace('/Home/', '');

const handlOnClick = ()=>{
    navigate('/Home/compatibility')
}
  return(
        <>
        <GoBackButton/>
            <div className={s.aroundSign}>
             <div className={s.imageActive}>
                <img src={`/images/${signActive.nickName}(1).png`} alt=""/>
                 <div className={s.labelSign}>
                     <p className={`${s.label} ${s.pilcrow}`}>Сумісність для знаку</p>
                     <p className= {`${s.ameSign} ${s.pilcrow}`}><b>{signActive.name}</b></p>
                 </div>
             </div>
         </div>

          <RenderSignsGroup/>
          
          {coupleActive?.name!==''?<button onClick={handlOnClick} className={s.change}>Продовжити</button>:''}

          <br/><div className={s.empti}></div>
          <FooterHoroscop/>
        </>
    )
}
export default RenderSignsTwo;







