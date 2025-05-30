import s from "../HomePage.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { startToggleHorosckop } from "../../../redux/feature/homeSlise";

const Checkbox =()=>{
    const dispatch = useDispatch();
    const initialHorosckop = useSelector(state => state.home.initialHorosckop)
  
    return(
        <div className={s.home_chackbox}>
        	<input onChange={()=>dispatch(startToggleHorosckop())} type="checkbox" checked={initialHorosckop?true:false} id="toggle"/>
        	<label htmlFor="toggle"></label>
        </div>
    )
}

export default Checkbox;