
import s from "./PhoneHorosckop.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { showForecastForSign } from "../../../redux/feature/homeSlise";
import RenderSignsGroup from "./RenderSignsGroup";

const RenderSigns =()=>{
    const dispatch = useDispatch()
    const signActive = useSelector(state => state.home.firstSign)

  return(
        <>
            <div  className={s.title}>
              <p>Обери свій знак зодіаку</p>
            </div>

            <RenderSignsGroup/>
          
            {signActive.name!==''?<button onClick={()=>dispatch(showForecastForSign())} className={s.change}>Продовжити</button>:''}

        </>
    )
}
export default RenderSigns;







