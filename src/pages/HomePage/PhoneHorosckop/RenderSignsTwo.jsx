
import s from "./PhoneHorosckop.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { showSumisnistyForCouple } from "../../../redux/feature/homeSlise";
import RenderSignsGroup from "./RenderSignsGroup";
import GoBackButton from "./GoBackButton";
import FooterHoroscop from "./FooterHoroscop";

const RenderSignsTwo =()=>{
    const dispatch = useDispatch()
    const signActive = useSelector(state => state.home.firstSign)
    const coupleActive = useSelector(state => state.home.twoSign)

  return(
        <>
        <GoBackButton/>
            <div className={s.aroundSign}>
             <div className={s.imageActive}>
                <img src={`/images/${signActive.nickName} (1).png`} alt=""/>
                 <div className={s.labelSign}>
                     <p className={`${s.label} ${s.pilcrow}`}>Сумісність для знаку</p>
                     <p className= {`${s.ameSign} ${s.pilcrow}`}><b>{signActive.name}</b></p>
                 </div>
             </div>
         </div>

          <RenderSignsGroup/>
          
          {coupleActive?.name!==''?<button onClick={()=>dispatch(showSumisnistyForCouple())} classNameName={s.change}>Продовжити</button>:''}

          <br/><div className={s.empti}></div>
          <FooterHoroscop/>
        </>
    )
}
export default RenderSignsTwo;







