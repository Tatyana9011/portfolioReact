
import s from "./PhoneHorosckop.module.css";
import { useSelector, useDispatch } from 'react-redux';
import RenderSignsGroup from "./RenderSignsGroup";
import { useNavigate } from 'react-router-dom';
const RenderSigns =()=>{
    const signActive = useSelector(state => state.home.firstSign)
    const navigate = useNavigate();
     
  return(
        <>
            <div  className={s.title}>
              <p>Обери свій знак зодіаку</p>
            </div>

            <RenderSignsGroup/>
          
            {signActive.name!==''?<button onClick={()=>navigate('/Home/forecast')} className={s.change}>Продовжити</button>:''}

        </>
    )
}
export default RenderSigns;







